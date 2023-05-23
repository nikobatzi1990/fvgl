from django.contrib import admin
from django.urls import path
from videogames import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('games/', views.getData),
    path('submission/', views.addGame),
    path('game/<int:pk>/', views.editGame),
    path('deletion/<int:pk>/', views.deleteGame)
]
