FROM python:3.11-slim

WORKDIR /app

# Dependencias del sistema
RUN apt-get update && apt-get install -y gcc libpq-dev && rm -rf /var/lib/apt/lists/*

# Copiar requirements e instalar
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copiar todo el código
COPY . .

EXPOSE 8000

# Comando por defecto: Gunicorn escuchando en 0.0.0.0
CMD ["gunicorn", "backend.wsgi:application", "--bind", "0.0.0.0:8000"]

