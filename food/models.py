from django.db import models
from django.contrib.auth.models import User

class Food(models.Model):
    name = models.CharField(max_length=50)
    image = models.ImageField(upload_to="products/images/")
    price = models.IntegerField()
    description = models.TextField()
    category = models.ForeignKey("food.Category", on_delete=models.CASCADE, null=True)
    add_cart = models.BooleanField(default=False)
    is_deleted = models.BooleanField(default=False)
    is_favorite = models.BooleanField(default=False)  
    

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    items = models.ManyToManyField(Food)
