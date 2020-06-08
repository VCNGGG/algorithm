FROM node:12
# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./
RUN npm install -g typescript@3.7.4
# Install app dependencies
RUN npm run tnpm
RUN npm install pm2 -g --registry=https://registry.npm.taobao.org
# Bundle app source
COPY . .
RUN tsc
EXPOSE 3001
CMD [ "pm2-runtime", "app.yaml" ]