from django.urls import path 
from rest_framework_simplejwt.views import TokenObtainPairView,TokenRefreshView

from api.auth import views


urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path("create/",views.create),
]