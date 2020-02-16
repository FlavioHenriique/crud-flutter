FROM postgres

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD flutter
ENV POSTGRES_DB crud-flutter

copy tables.sql /docker-entrypoint-initdb.d/