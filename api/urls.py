from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/games/', views.getData),
    path('api/games/addNewGame/', views.addGame),
    path('api/games/<int:pk>/edit/', views.editGame),
    path('api/games/<int:pk>/deletion/', views.deleteGame)
]
