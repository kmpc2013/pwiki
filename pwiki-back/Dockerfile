FROM node:20.11.1 as pwikiback
WORKDIR /usr/app
COPY package*.json ./
RUN npm install --production --silent 
COPY . .
EXPOSE 3333
RUN chown -R node /usr/app
USER node
CMD ["npm", "start"]
