# using node 20
FROM node:20-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm i

# copy source code 
COPY . .

# expose server port
EXPOSE 3000

# make sure user doesn't run as root user
RUN useradd appuser 
USER appuser

# run the application
CMD ["npm", "start"]

