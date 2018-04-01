from node:carbon

WORKDIR /usr/src/app

copy package*.json ./
RUN npm config set strict-ssl false
RUN npm install

COPY . .

expose 3000
CMD ["npm" , "start"]