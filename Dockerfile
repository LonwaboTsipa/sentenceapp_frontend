# Use the official Node.js 14 image as the base image
  FROM node:18.17.0

  # Set the working directory in the container to /app
  WORKDIR /app

  # Copy package.json and package-lock.json to the working directory
  COPY package*.json ./

  # Install the application dependencies
  RUN npm install

  # Copy the rest of the application code to the working directory
  COPY . .

  # Build the Nuxt3 application
  RUN npm run build

  # Expose port 3000 for the application
  EXPOSE 3000

  # Define the command to run the application
  CMD [ "npm", "start" ]