from rest_framework.response import Response
from .serializers import FoodSerializer,FoodDetailSerializer,CartSerializer
from food.models import Food,Cart
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view,permission_classes
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import IsAuthenticated
import requests

@api_view(["GET"])
def food(request):
    instances = Food.objects.filter(is_deleted=False)
    q = request.GET.get("q")
    if q:
        instances = instances.filter(name__icontains=q)
    
    context = {
        "request": request
    }
    serializer = FoodSerializer(instances, many=True, context=context)
    
    response_data = {
        "status_code": 200,  
        "data": serializer.data
    }
    
    return Response(response_data)



@api_view(["GET"])
def food_detail(request,pk):
    if Food.objects.filter(pk=pk).exists():
        instance = Food.objects.get(pk=pk)
        
        context = {
            "request":request   
        }
        serializer = FoodDetailSerializer(instance,context=context)
        
        response_data = {
            "status code" : 6000,
            "data" : serializer.data
        }
        return Response(response_data)
    else:
        response_data = {
            "status code" : 6001,
            "message" : "Item Not Exist"
        }
        
        return Response(response_data)

@api_view(["GET"])
@permission_classes([IsAuthenticated])
def cart(request):
    user = request.user
    cart = get_object_or_404(Cart, user=user)
    serializer = CartSerializer(cart.items.all(), many=True, context={"request": request})  

    response_data = {
        "status_code": 200,
        "data": serializer.data
    }
    return Response(response_data)



@csrf_exempt
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def add_to_cart(request, pk):
    user = request.user
    food_item = Food.objects.get(pk=pk)

    cart, _ = Cart.objects.get_or_create(user=user)
    cart.items.add(food_item)
    cart.save()

    response_data = {
        "status_code": 200,
        "message": "Added to cart"
    }
    return Response(response_data, status=200, content_type="application/json")


@csrf_exempt
@api_view(["POST"])
@permission_classes([IsAuthenticated])
def delete_cart_item(request, pk):
    user = request.user
    food_item = get_object_or_404(Food, pk=pk)
    cart = get_object_or_404(Cart, user=user)
    
    cart.items.remove(food_item)

    response_data = {
        "status_code": 200,
        "message": "Item removed from cart"
    }
    return Response(response_data)



