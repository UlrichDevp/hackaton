# --- Étape 1 : Build ---
# IMPORTANT : On passe à Node 20 pour la compatibilité avec Vite 5
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

# Installation propre des dépendances
RUN npm install

COPY . .

# Construction (cela va créer le dossier /app/dist)
RUN npm run build

# --- Étape 2 : Serveur Nginx ---
FROM nginx:alpine

# Copie depuis le bon dossier 'dist'
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]