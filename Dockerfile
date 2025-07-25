FROM node:20

WORKDIR /app

# Kopiujemy plik z aplikacją
COPY index.js .

# Instalujemy Express
RUN npm init -y && npm install express

# Uruchamiamy aplikację
CMD ["node", "index.js"]

