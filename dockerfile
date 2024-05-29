# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the application source code
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run the application
CMD ["node", "app.js"]
