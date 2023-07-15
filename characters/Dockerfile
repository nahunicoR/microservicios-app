FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
#exponer el puerto
EXPOSE 8001

CMD [ "npm","start" ]