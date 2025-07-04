from rest_framework.response import Response
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
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
@parser_classes([MultiPartParser, FormParser])
def addGame(request):
   serializer = GameSerializer(data=request.data)
   if serializer.is_valid():
      try:
         serializer.save()
         return Response(serializer.data, status=200)
      except Exception as e:
         print("Save Error:", str(e))
         return Response({'error': str(e)}, status=500)
   else:
      print("Validation Error:", serializer.errors)
      return Response(serializer.errors, status=400)
 

@api_view(['PATCH'])
@parser_classes([MultiPartParser, FormParser])
def editGame(request, pk):
   try:
      game = Game.objects.get(pk=pk)
      game.title = request.data.get('title', game.title)
      game.release_year = request.data.get('release_year', game.release_year)
      game.developer = request.data.get('developer', game.developer)
      game.genre = request.data.get('genre', game.genre)
      game.comment = request.data.get('comment', game.comment)
      if 'image_url' in request.FILES:
         game.image_url = request.FILES['image_url']
      game.save()
      serializer = GameSerializer(game)
      return Response(serializer.data, status=200)

   except Game.DoesNotExist:
      return Response({'error': 'Game not found'}, status=404)

   except Exception as e:
      print("Error:", str(e))
      return Response({'error': str(e)}, status=500)

@api_view(['DELETE'])
def deleteGame(request, pk): 
   game = Game.objects.get(pk=pk)
   game.delete()
   return Response("Game Deleted")