from rest_framework import serializers
from .models import KYC, ConversionRate, Token, Transaction


class KYCSerializer(serializers.ModelSerializer):
    class Meta:
        model = KYC
        fields = '__all__'  # Include all fields


class TokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = Token
        fields = '__all__'


class TransactionSerializer(serializers.ModelSerializer):
    sender_username = serializers.CharField(source='sender.username', read_only=True)
    receiver_username = serializers.CharField(source='receiver.username', read_only=True)

    class Meta:
        model = Transaction
        fields = (
        'transaction_type', 'sender', 'sender_username', 'receiver', 'receiver_username', 'amount', 'token_amount',
        'created_at')
