from django.db import models
import psycopg2
from dotenv import load_dotenv
import os

load_dotenv()

conn = psycopg2.connect(database = os.getenv('DB_NAME'),
                        user = os.getenv('DB_USER'),
                        host = 'localhost',
                        password = os.getenv('DB_PASSWORD'),
                        port = 5432)

cursor = conn.cursor()

# Create your models here.

class Game (models.Model):
    title = models.CharField(max_length=50)
    release_year = models.IntegerField()
    developer = models.CharField(max_length=50)
    genre = models.CharField(max_length=50)

cursor.execute("INSERT INTO videogames_game(title, release_year, developer, genre) VALUES('The Legend of Zelda: Ocarina of Time', '1998', 'Nintendo', 'adventure')")

conn.commit()
cursor.close()
conn.close()