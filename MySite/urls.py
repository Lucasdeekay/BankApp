from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .api_views import KYCViewSet, TokenViewSet, TransactionViewSet

router = DefaultRouter()
router.register('kyc', KYCViewSet, basename='kyc')  # Register KYCViewSet with base name 'kyc'
router.register('tokens', TokenViewSet, basename='tokens')
router.register('transactions', TransactionViewSet, basename='transactions')

urlpatterns = [
    path('login/', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('forgot-password/', views.forgot_password_view, name='forgot_password'),
    path('reset-password/<int:user_id>/<str:token>/', views.password_reset_view, name='password_reset'),
    path('dashboard/', views.user_dashboard, name='user_dashboard'),
    path('deposit/', views.deposit, name='deposit'),
    path('withdraw/', views.withdraw, name='withdraw'),
    path('transfer/', views.transfer, name='transfer'),
    path('api/', include(router.urls)),
]
