from django.shortcuts import render
# Create your views here.
from django.http import HttpResponse
from .serializers import AllSerializers
from rest_framework import viewsets
from .models import All

class AllView(viewsets.ModelViewSet):
    serializer_class=AllSerializers
    queryset=All.objects.all()

#def index(request):
 #   return HttpResponse('Helo amiguito, eres wey :3 te amo peggo')
