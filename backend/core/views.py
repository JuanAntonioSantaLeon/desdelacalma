from rest_framework.pagination import PageNumberPagination
from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import Cliente
from .serializers import ClienteSerializer

class ClientePagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'  # opcional, permite cambiar el tamaño por query param
    max_page_size = 50  # opcional

class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    # Agregamos filtros y búsqueda
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]

    # Campos por los que se puede filtrar directamente
    filterset_fields = {
        'first_name': ['icontains'],
        'last_name': ['icontains'],
        'arrival_date': ['gte', 'lte'],
        'departure_date': ['gte', 'lte'],
    }

    # Búsqueda de texto libre
    search_fields = ['first_name', 'last_name', 'email', 'favorite_activities']

    # Ordenación
    ordering_fields = ['first_name', 'last_name', 'arrival_date', 'departure_date', 'created_at']
    ordering = ['created_at']

    pagination_class = ClientePagination