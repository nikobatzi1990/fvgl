from django.db import models

class Game (models.Model):
  title = models.CharField(max_length=50)
  release_year = models.IntegerField()
  developer = models.CharField(max_length=50)
  genre = models.CharField(max_length=50)
  comment = models.TextField(blank=True, null=True)
  image_url = models.ImageField(upload_to='images/', blank=True, null=True)