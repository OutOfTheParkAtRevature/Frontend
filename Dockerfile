FROM node:14.15 as build
WORKDIR /work/
COPY . .
RUN npm clean-install
RUN npm run build -- --prod

FROM nginx:alpine
COPY --from=build /work/nginx.conf /etc/nginx/conf.d/frontend.conf
COPY --from=build /work/dist/OutOfTheParkAtRevature/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
