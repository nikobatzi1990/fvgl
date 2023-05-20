from django.urls import path
from . import views

urlpatterns = [
    path('', views.getData),
    path('new-game/', views.addGame),
]