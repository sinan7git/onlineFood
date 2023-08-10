from django.urls import path
from . import views

urlpatterns = [
    path('', views.food),
    path("cart/",views.cart),
    path('view/<int:pk>/', views.food_detail),
    path('add_cart/<int:pk>/', views.add_to_cart, name='add_cart'),
    path('delete_cart/<int:pk>/', views.delete_cart_item),
]
