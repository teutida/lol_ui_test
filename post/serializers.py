from rest_framework import serializers
from .models import All


class AllSerializers(serializers.ModelSerializer):
    class Meta:
        model=All
        fields =('id', 'title','description','completed')