from rest_framework import serializers
from database.models import Game
class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'