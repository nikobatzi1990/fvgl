from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('games/', views.getData),
    path('games/addNewGame/', views.addGame),
    path('games/<int:pk>/edit/', views.editGame),
    path('games/<int:pk>/deletion/', views.deleteGame)
]
