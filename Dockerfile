FROM node:20-alpine

# set the working directory to /app
WORKDIR /nextapp

# copy the rest of the files to the working directory
COPY . /nextapp/

# install dependencies
RUN npm install

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 3000

# command to run the app
CMD npm run dev

