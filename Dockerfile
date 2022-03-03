#### №1 ####
#FROM node:14 as build-step
#RUN mkdir -p /app
#WORKDIR /app
#COPY package.json /app
#RUN npm install
#COPY . /app
#RUN npm run build --prod
#
#FROM nginx:1.20.1
#COPY --from=build-step /app/dist/java-blog-frontend /usr/share/nginx/html
#EXPOSE 4200:80

#### №2 ####

FROM node:14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./app
COPY proxyconf.json ./app
RUN npm install
COPY . /app
RUN npm run build --prod

#ARG configuration=production
#RUN npm run build -- --outputPath=./app/dist/java-blog-frontend --configuration $configuration

FROM nginx:1.20.1
COPY --from=build /app/dist/java-blog-frontend /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]

#### №3 ####

#FROM nginx:alpine
#COPY dist/java-blog-frontend /usr/share/nginx/html
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY nginx.conf /etc/nginx/conf.d/default.conf

#### №4 ####

#FROM node:14 as build
#WORKDIR /app
#
#COPY package*.json ./
#RUN npm install
#
#COPY . ./
#
#ARG configuration=production
#
#RUN npm run build -- --outputPath=./dist/out --configuration $configuration
#
#FROM nginx
#
#COPY --from=build /app/dist/out/ /usr/share/nginx/html
#
#COPY nginx.conf /etc/nginx/nginx.conf
#
#EXPOSE 80
#
#ENTRYPOINT ["nginx","-g","daemon off;"]


FROM node:14 as build
RUN mkdir -p /app
WORKDIR /app
COPY package*.json ./app
COPY proxyconf.json ./app
RUN npm install
COPY . /app
RUN npm run build --prod

FROM nginx:1.20.1
COPY --from=build /app/dist/java-blog-frontend /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
