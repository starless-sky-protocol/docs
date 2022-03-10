## System requeriments

- PHP 8.0 or higher
- - GMP and PECL intl extensions must be enabled
- - (optional) OPcache should be enabled
- Apache, Nginx or Litespeed
- Valid strict SSL certificate

## Installing

You will need [composer](https://getcomposer.org/download/) to wrap things up. Firstly, clone this repository and put where your network server is reading root folder.

Starless Sky Network does not use a database to store information. Files and indexing are used to fetch data. The idea of the system is not to search for information.

After cloning the repository to the root directory of your server's domain, install the project's dependencies with composer:

    composer install

After that, let's start configuring the server. Clone the configuration file using:

    cd ./src/system/application/Config
    cp config.php.example config.php

> Note: you must put the directory root of your HTTP server to `/src`

With this, we will have the configuration file that will define configuration constants of the server that is running.

To read about the configuration file documentation, see the [configuration file](/configuration)