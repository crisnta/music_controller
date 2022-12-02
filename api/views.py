from django.shortcuts import render
from rest_framework import generics, status
from .models import Room
from .serializers import RoomSerializers, CreateRoomSerializers
from rest_framework.views import APIView
from rest_framework.response import Response

class RoomView(generics.CreateAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializers

class CreateRoomView(APIView):
    serializer_class = CreateRoomSerializers
    
    def post(self, request, format=None):
        pass