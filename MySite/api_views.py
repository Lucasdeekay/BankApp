from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .models import KYC, Token, Transaction, Saving
from .serializers import KYCSerializer, TokenSerializer, TransactionSerializer, SavingSerializer


class KYCViewSet(viewsets.ModelViewSet):
    """API endpoint for KYC operations"""
    queryset = KYC.objects.all()
    serializer_class = KYCSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can access KYC


class TokenViewSet(viewsets.ModelViewSet):
    """API endpoint for Token Information"""
    queryset = Token.objects.all()
    serializer_class = TokenSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can view their token balance


class SavingViewSet(viewsets.ModelViewSet):
    """API endpoint for Token Information"""
    queryset = Saving.objects.all()
    serializer_class = SavingSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can view their token balance


class TransactionViewSet(viewsets.ModelViewSet):
    """API endpoint for Transaction History"""
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAuthenticated]  # Only authenticated users can view their transaction history
