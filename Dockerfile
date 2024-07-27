FROM node:20.15.0

WORKDIR /app

EXPOSE 3000

COPY . .

RUN npm install

CMD [ "npm", "run", "start:dev" ]
