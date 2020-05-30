FROM composer as build

WORKDIR /app/

COPY composer.* ./

RUN composer install

FROM php:7.3-apache

COPY ./ /var/www/html

COPY --from=build /app/vendor /var/www/html/vendor

RUN chown -R www-data:www-data /var/www

# enable a2enmod headers
RUN cp /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/ && \
    cp /etc/apache2/mods-available/headers.load /etc/apache2/mods-enabled/
    
# install pdo_mysql module
RUN docker-php-ext-install pdo_mysql

EXPOSE 80
