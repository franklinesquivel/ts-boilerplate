FROM node:14.10.1-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.json*", "./build/*/"]
RUN npm install --production --silent 
# && mv node_modules ../
EXPOSE 80
CMD ["npm", "start"]