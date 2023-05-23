from django.db import models

class Game (models.Model):
  title = models.CharField(max_length=50)
  release_year = models.IntegerField()
  developer = models.CharField(max_length=50)
  genre = models.CharField(max_length=50)