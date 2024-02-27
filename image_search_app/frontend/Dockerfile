FROM node:15.14-alpine

# Set the working directory in the container
WORKDIR /app

# Expose port
EXPOSE 3000

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache

# Copy the current directory contents into the container at /app
COPY . ./

# Run the application
CMD ["npm", "start"]
