from django.contrib import messages
from django.contrib.auth import login, authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.shortcuts import render, redirect

from MySite.models import KYC, Token, Transaction


# Create your views here.
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to successful login page
            return redirect('user_dashboard')  # Replace 'home' with your desired redirect URL
        else:
            # Invalid login credentials
            error_message = 'Invalid username or password.'
            return render(request, 'login.html', {'error_message': error_message})
    return render(request, 'login.html')


def register_view(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        national_id = request.POST['national_id']
        phone_number = request.POST['phone_number']
        date_of_birth = request.POST['date_of_birth']
        address = request.POST['address']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        if password1 != password2:
            error_message = 'Passwords do not match.'
            return render(request, 'register.html', {'error_message': error_message})
        # Create user
        user = User.objects.create_user(username=username, password=password1)
        user.save()

        kyc = KYC.objects.create(user=user, first_name=first_name, last_name=last_name, email=email,
                                 national_id=national_id, phone_number=phone_number, date_of_birth=date_of_birth,
                                 address=address)
        kyc.save()

        return redirect('login')
    return render(request, 'register.html')


def forgot_password_view(request):
    if request.method == 'POST':
        email = request.POST['email']
        try:
            user = User.objects.get(email=email)
            # Construct reset password URL with the user ID and token
            reset_password_url = f"http://your_domain/reset-password/{user.id}"
            # Send email with reset password link
            send_mail(
                subject='Password Reset Link',
                message=f'Click the link below to reset your password:\n{reset_password_url}',
                from_email='your_email@example.com',  # Replace with your email address
                recipient_list=[email],
            )
            success_message = 'We sent you an email with instructions to reset your password.'
            return render(request, 'forgot_password.html', {'success_message': success_message})
        except User.DoesNotExist:
            error_message = 'Email address not found.'
            return render(request, 'forgot_password.html', {'error_message': error_message})
    return render(request, 'forgot_password.html')


def password_reset_view(request, user_id):
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        error_message = 'Invalid user ID.'
        return render(request, 'password_reset.html', {'error_message': error_message})

    if request.method == 'POST':
        new_password1 = request.POST['new_password1']
        new_password2 = request.POST['new_password2']
        if new_password1 != new_password2:
            error_message = 'Passwords do not match.'
            return render(request, 'password_reset.html', {'error_message': error_message})
        # Set the new password
        user.set_password(new_password1)
        user.save()
        success_message = 'Password reset successfully!'
        return render(request, 'password_reset.html', {'success_message': success_message})
    return render(request, 'password_reset.html')


@login_required
def user_dashboard(request):
    user = request.user
    try:
        token_balance = Token.objects.get(user=user).token_amount
    except Token.DoesNotExist:
        token_balance = 0

    recent_transactions = Transaction.objects.filter(user=user).order_by('-created_at')[:5]  # Get 5 recent transactions

    context = {
        'user': user,
        'token_balance': token_balance,
        'recent_transactions': recent_transactions,
    }
    return render(request, 'user_dashboard.html', context)


@login_required
def deposit(request):
    if request.method == 'POST':
        deposit_amount = request.POST.get('deposit_amount')
        try:
            deposit_amount = float(deposit_amount)  # Convert to float for calculations
            if deposit_amount <= 0:
                messages.error(request, 'Deposit amount must be a positive number.')
                return render(request, 'deposit.html')

            # Get conversion rate
            user_token = Token.objects.get_or_create(user=request.user)  # Assuming one conversion rate object
            conversion_rate = 100

            # Calculate token amount
            token_amount = deposit_amount / conversion_rate  # Convert to integer for tokens

            user_token.naira_amount += deposit_amount
            user_token.token_amount += token_amount
            user_token.save()

            Transaction.objects.create(
                transaction_type='deposit',
                sender=request.user,
                receiver=request.user,
                amount=deposit_amount,
                token_amount=token_amount,  # Negative for received amount
            )

            messages.success(request, f"Deposited {deposit_amount} Naira. You received {token_amount} Tokens.")
            return redirect('user_dashboard')  # Redirect to user dashboard after successful deposit

        except (ValueError, User.DoesNotExist):
            messages.error(request, 'Invalid deposit amount or conversion rate error.')
            return render(request, 'deposit.html')

    return render(request, 'deposit.html')


@login_required
def withdraw(request):
    if request.method == 'POST':
        withdrawal_amount = request.POST.get('withdrawal_amount')
        bank_name = request.POST.get('bank_name')
        acct_name = request.POST.get('acct_name')
        acct_no = request.POST.get('acct_no')
        try:
            withdrawal_amount = float(withdrawal_amount)
            if withdrawal_amount <= 0:
                messages.error(request, 'Withdrawal amount must be a positive number.')
                return render(request, 'withdraw.html')

            user_token = Token.objects.get_or_create(user=request.user)
            conversion_rate = 100

            token_amount = withdrawal_amount / conversion_rate

            if user_token.naira_amount < withdrawal_amount:
                messages.error(request, 'Insufficient balance.')
                return render(request, 'withdraw.html')

            # Update user's token balance
            user_token.naira_amount -= withdrawal_amount
            user_token.token_amount -= token_amount
            user_token.save()

            Transaction.objects.create(
                transaction_type='withdrawal',
                sender=request.user,
                receiver=f'{acct_name} - {acct_no} - {bank_name}',
                amount=withdrawal_amount,
                token_amount=token_amount,  # Negative for received amount
            )

            # Simulate withdrawal processing (replace with actual integration)
            messages.success(request, f"Withdrew {token_amount} Tokens. You received {withdrawal_amount} Naira.")
            return redirect('user_dashboard')

        except (ValueError, User.DoesNotExist):
            messages.error(request, 'Invalid withdrawal amount or conversion rate error.')
            return render(request, 'withdraw.html')

    return render(request, 'withdraw.html')


@login_required
def transfer(request):
    if request.method == 'POST':
        recipient_username = request.POST.get('recipient_username')
        transfer_amount = request.POST.get('transfer_amount')
        try:
            transfer_amount = float(transfer_amount)
            if transfer_amount <= 0:
                messages.error(request, 'Transfer amount must be a positive number.')
                return render(request, 'transfer.html')

            # Check user's token balance
            user_token = Token.objects.get_or_create(user=request.user)
            conversion_rate = 100

            token_amount = transfer_amount / conversion_rate

            if user_token.naira_amount < transfer_amount:
                messages.error(request, 'Insufficient balance.')
                return render(request, 'transfer.html')

            # Find recipient user
            try:
                recipient_user = User.objects.get(username=recipient_username)
            except User.DoesNotExist:
                messages.error(request, 'Invalid recipient username.')
                return render(request, 'transfer.html')

            # Debit sender's token balance
            user_token.naira_amount -= transfer_amount
            user_token.token_amount -= token_amount
            user_token.save()

            # Credit recipient's token balance
            recipient_token = Token.objects.get_or_create(user=recipient_user)
            recipient_token.naira_amount += transfer_amount
            recipient_token.token_amount += token_amount
            recipient_token.save()

            # Create transaction record for sender
            Transaction.objects.create(
                transaction_type='transfer',
                sender=request.user,
                receiver=recipient_user,
                amount=transfer_amount,
                token_amount=token_amount,
            )

            # Create transaction record for receiver (optional)
            Transaction.objects.create(
                transaction_type='transfer',
                sender=recipient_user,
                receiver=request.user,
                amount=transfer_amount,
                token_amount=token_amount,  # Negative for received amount
            )

            messages.success(request, f"Transferred {token_amount} Tokens to {recipient_username}.")
            return redirect('user_dashboard')

        except (ValueError, User.DoesNotExist):
            messages.error(request, 'Invalid transfer amount or recipient username error.')
            return render(request, 'transfer.html')

    return render(request, 'transfer.html')
