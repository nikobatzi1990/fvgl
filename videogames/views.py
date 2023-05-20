from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from . models import Game
from . serializers import GameSerializer
# Create your views here.

@api_view(['GET'])
def getData(request):
  # new_game = {'title':'Legend of Zelda: Tears of the Kingdom', 
  #             'release_year': 2023, 
  #             'developer': 'Nintendo', 
  #             'genre': 'adventure, open world'
  #             }
  games = Game.objects.all()
  serializer = GameSerializer(games, many=True)
  return Response(serializer.data)

@api_view(['POST'])
def addGame(request):
    serializer = GameSerializer(data=request.data)
    if serializer.is_valid():
       serializer.save()
    return Response(serializer.data)
