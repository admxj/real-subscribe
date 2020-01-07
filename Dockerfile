FROM nginx
MAINTAINER "admxj" <admxj@126.com>
RUN mkdir -p /usr/share/nginx/html/real-subscribe/
COPY ./build/ /usr/share/nginx/html/real-subscribe/
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 83
