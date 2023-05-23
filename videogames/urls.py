from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('api/new-game/', views.addGame),
]