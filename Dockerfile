FROM node:20.15.0

WORKDIR /my-app

EXPOSE 3000

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "run", "start:dev" ]
