FROM node:14.16.0 AS build-env
RUN npm set progress=false && npm config set depth 0 && npm cache clean --force
WORKDIR /app
# Copy everything else and build
COPY ./package.json ./package-lock.json /app/
RUN npm install -g @angular/cli@9.0.2 && npm install
COPY . /app
ENV NODE_OPTIONS="--max-old-space-size=4096"
RUN npm run build:ssr

# Build runtime image
# FROM node:14.16.0-alpine

# WORKDIR /app
# COPY --from=build-env /app  /app

# Get all the code needed to run the app
# COPY --from=build-env /app/dist /app/dist

EXPOSE 3000
ENV NODE_ENV production
CMD ["npm","run","serve:ssr"]
