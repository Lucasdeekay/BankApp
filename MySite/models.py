from django.contrib.auth.models import User
from django.db import models


class KYC(models.Model):
    """Model to store user KYC information"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField()
    national_id = models.CharField(max_length=20)
    phone_number = models.CharField(max_length=15)
    date_of_birth = models.DateField()
    address = models.CharField(max_length=255)
    kyc_verified = models.BooleanField(default=False)


class Token(models.Model):
    """Model to store user token balances"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    naira_amount = models.DecimalField(max_digits=15, decimal_places=2)
    token_amount = models.DecimalField(max_digits=15, decimal_places=9)


class Transaction(models.Model):
    """Model to store transaction history"""
    TRANSACTION_TYPE = (
        ('deposit', 'Deposit'),
        ('withdrawal', 'Withdrawal'),
        ('transfer', 'Transfer'),
    )
    transaction_type = models.CharField(max_length=10, choices=TRANSACTION_TYPE)
    sender = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='sent_transactions')
    receiver = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='received_transactions')
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    token_amount = models.PositiveIntegerField(blank=True, null=True)  # for transfers
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.transaction_type} - {self.amount} Naira ({self.token_amount} Tokens)"
