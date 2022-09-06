FROM node:alpine

WORKDIR /user/src/frontend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]