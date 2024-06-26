# Fetching the minified node image on apline linux
FROM node:18

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /fakerAPI

# Copying all the files in our project
COPY . .

# Installing dependencies
RUN npm install

# Starting our application
CMD [ "node", "index.js" ]

# Exposing server port
EXPOSE 80