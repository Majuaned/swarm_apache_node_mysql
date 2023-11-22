FROM node:latest

WORKDIR /app

COPY ./app.js ./package.json ./package-lock.json ./

RUN npm install

EXPOSE 8090

CMD ["node", "app.js"]
