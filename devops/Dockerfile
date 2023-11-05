```Dockerfile
# Use an official Node.js runtime as the parent image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json into the container at /app
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install

# Bundle the app source inside the Docker image
COPY . .

# Make port 8080 available to the world outside this container
EXPOSE 8080

# Run the app when the container launches
CMD ["npm", "start"]
```