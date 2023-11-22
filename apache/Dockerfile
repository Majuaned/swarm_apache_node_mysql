FROM httpd:2.4

COPY ./app.php /usr/local/apache2/htdocs/index.php

# Eliminamos el archivo index.html (si existe)
RUN rm /usr/local/apache2/htdocs/index.html

EXPOSE 80
