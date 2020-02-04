# Project Setup
---
## DATABASE SETUP
To use Sequelize Migrations:

1. Install mariadb with `$` `brew install mariadb`
    - Follow instructions to start server
2. Open the mariadb shell with `$` `mariadb -u YOUR_MACOS_USERNAME`
3. Create a Database called "DC_ENGENUITY" with `>` `CREATE DATABASE DC_ENGENUITY;`
4. In the mariadb shell run `>` `ALTER USER root@localhost IDENTIFIED BY 'password'` 
    - As of 47123a7d1ad40dfe09354da38c61a98de98972ac you can use any db user so long as you set it in your env file. 
    - root, password remains the default in template.env, and no changes should be necessary for existing configurations.
5. This will change your database root user's password to password
6. Ensure that you have the sequelize-cli installed
7. cd to 'server' run `$` `yarn`
8. cd to 'server' Run `$` `sequelize db:migrate`
    - All migrations should run successfully.
## ENV SETUP
As of commit ff5fc75720aae16f7d7e6afdcbe88a8e89aca86f, .env is no longer in the working tree. Template.env is provided for development, **please copy Template.env to .env for use in development.**

*server/*

`$` `cp template.env .env`

In the future database credentials will also be move to .env.