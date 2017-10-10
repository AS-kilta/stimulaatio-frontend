FROM node:8.6.0-alpine

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Clone stuff from GitHub
RUN apk update && apk add git
RUN git clone https://github.com/Qaapu/stimulaatio.git
WORKDIR /usr/src/app/stimulaatio

# Install app dependencies
RUN npm install

# Create a production build
RUN npm run build
RUN npm install -g serve

# Copy files to build
RUN cp src/files/* build

# Run app
CMD [ "serve", "-s", "build" ]
