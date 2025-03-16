from rest_framework import serializers
from database.models import Game

class GameSerializer(serializers.ModelSerializer):
    
    image_url = serializers.ImageField(required=False)
    class Meta:
        model = Game
        fields = '__all__'