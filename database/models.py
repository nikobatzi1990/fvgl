from django.db import models

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Game (models.Model):
  title = models.CharField(max_length=50)
  release_year = models.IntegerField()
  developer = models.CharField(max_length=50)
  genre = models.CharField(max_length=50)
  image_url = models.ImageField(upload_to=upload_to, blank=True, null=True)