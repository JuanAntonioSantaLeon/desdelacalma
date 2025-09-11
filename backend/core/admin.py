from django.contrib import admin
from .models import Cliente

@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('first_name', 'last_name', 'email', 'phone_number', 'arrival_date', 'departure_date')
    search_fields = ('first_name', 'last_name', 'email', 'phone_number')
    list_filter = ('arrival_date', 'departure_date')
