from rest_framework import serializers
from database.models import Game
import json

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = '__all__'

    # def to_internal_value(self, data):
    #     genre_data = data.get("genre")
    #     if isinstance(genre_data, str):
    #         try:
    #             data["genre"] = json.loads(genre_data)
    #         except json.JSONDecodeError:
    #             pass
    #     return super().to_internal_value(data)
