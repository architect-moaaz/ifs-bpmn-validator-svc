FROM node:16-alpine
WORKDIR  /usr/src/app
COPY  package.json ./
RUN npm install --force                                                                                                                                
COPY . .
EXPOSE 51502
CMD ["node" , "bin/validator.js"]
