## Clone

```shell
git clone git@github.com:ShmelyovOleg/calendar.git
```

## Setup environment

```shell
cp .env.example .env
```

where:

### Environment Variables

The application relies on the following environment variables, which need to be set up in your environment or `.env` file for proper configuration:

- **`PORT`**: The port on which the application will run. Default is `5000`.

- **`MYSQL_HOST`**: The hostname of the MySQL server. Typically set to `mysql` when running in a Docker container.

- **`MYSQL_USER`**: The username used to connect to the MySQL database. Example: `dbuser`.

- **`MYSQL_PORT`**: The port on which the MySQL server is running. Default is `3306`.

- **`MYSQL_PASSWORD`**: The password for the MySQL user. Ensure this is kept secure.

- **`MYSQL_DATABASE`**: The name of the MySQL database that the application will use. Example: `user_management`.

- **`MYSQL_ROOT_PASSWORD`**: The root password for the MySQL server. This should be kept highly secure.

- **`PHPMYADMIN_PORT`**: The port on which phpMyAdmin will be accessible. Default is `8080`.

## Install

```shell
make install
```

Install node_modules and other dependencies.

## Run application

```shell
make up
```

## Fill the database with initial data

```shell
make seed
```

## Makefile Commands

- **`check`** - Check your configuration

- **`up`** - Start all containers (in background)

- **`down`** - Stop all started for development containers

- **`restart`** - Restart all started for development containers

- **`install`** - Install dependencies

- **`seed`** - Create initial data
