from django.contrib import admin
from .models import All
# Register your models here.

class AllAdmin(admin.ModelAdmin):
    list=('title', 'description', 'completed')
    
admin.site.register(All, AllAdmin)