from django.contrib import admin
from .models import KYC, Token, Transaction


# Register your models here.

@admin.register(KYC)
class KYCAdmin(admin.ModelAdmin):
    list_display = ['user', 'first_name', 'last_name', 'kyc_verified']


@admin.register(Token)
class TokenAdmin(admin.ModelAdmin):
    list_display = ['user', 'naira_amount', 'token_amount']


@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ['transaction_type', 'sender', 'receiver', 'amount', 'token_amount', 'created_at']
