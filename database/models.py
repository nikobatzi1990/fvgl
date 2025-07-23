from django.db import models
from django.contrib.postgres.fields import ArrayField

class Game (models.Model):
  title = models.CharField(max_length=50)
  release_year = models.IntegerField()
  developer = models.CharField(max_length=50)
  genre = ArrayField(models.CharField(max_length=200, blank=True, null=True))
  genre_old = models.CharField(max_length=50, blank=True, null=True, default=list)
  comment = models.TextField(blank=True, null=True)
  image_url = models.ImageField(upload_to='images/', blank=True, null=True)