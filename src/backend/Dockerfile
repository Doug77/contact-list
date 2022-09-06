FROM node:alpine

WORKDIR /user/src/backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm", "start"]