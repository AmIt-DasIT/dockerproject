FROM node:14

COPY . /dockerbackend
WORKDIR /dockerbackend

COPY package.json .
RUN npm install
COPY . .
CMD npm start