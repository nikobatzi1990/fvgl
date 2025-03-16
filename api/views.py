from rest_framework.response import Response
from rest_framework.decorators import api_view
from database.models import Game
from database.serializers import GameSerializer

@api_view(['GET'])
def getAllGameData(request):
  games = Game.objects.all().order_by('id')
  serializer = GameSerializer(games, many=True)
  return Response(serializer.data)

@api_view(['GET'])
def getSingleGameData(request, pk):
   game = Game.objects.get(pk=pk)
   serializer = GameSerializer(game)
   return Response(serializer.data)

@api_view(['POST'])
def addGame(request):
    serializer = GameSerializer(data=request.data)
    if serializer.is_valid():
       serializer.save()
       return Response(serializer.data)
    return Response(serializer.errors)

@api_view(['PATCH'])
def editGame(request, pk):
  game = Game.objects.get(pk=pk)
  game.title = request.data.get('title', game.title)
  game.release_year = request.data.get('release_year', game.release_year)
  game.developer = request.data.get('developer', game.developer)
  game.genre = request.data.get('genre', game.genre)
  game.save()
  return Response(game)

@api_view(['DELETE'])
def deleteGame(request, pk): 
   game = Game.objects.get(pk=pk)
   game.delete()
   return Response("Game Deleted")