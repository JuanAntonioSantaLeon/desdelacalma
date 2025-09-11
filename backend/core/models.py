from django.db import models

class Cliente(models.Model):
    # Datos básicos
    first_name = models.CharField(max_length=100, verbose_name="Nombre del huésped")
    last_name = models.CharField(max_length=100, verbose_name="Apellido del huésped")
    email = models.EmailField(unique=True, verbose_name="Correo electrónico del huésped")
    phone_number = models.CharField(max_length=15, blank=True, verbose_name="Número de teléfono del huésped")

    # Datos sobre la experiencia en el resort
    arrival_date = models.DateField(null=True, blank=True, verbose_name="Fecha de llegada")
    departure_date = models.DateField(null=True, blank=True, verbose_name="Fecha de salida")
    favorite_activities = models.TextField(blank=True, verbose_name="Actividades favoritas del huésped")
    notes = models.TextField(blank=True, verbose_name="Notas personalizadas para mejorar la experiencia")

    # Fecha de creación y actualización
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="Fecha de creación")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="Fecha de actualización")

    def __str__(self):
        return f"{self.first_name} {self.last_name} ({self.email})"

