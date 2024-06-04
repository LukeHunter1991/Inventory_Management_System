# Inventory Management System 

[![License: MIT](https://img.shields.io/badge/License-MIT-aqua.svg?style=for-the-badge)](https://opensource.org/licenses/MIT) 

![node version](https://img.shields.io/badge/v22-node-blue?logo=nodedotjs) ![npm version](https://img.shields.io/badge/version-v10.5.1-npm.svg?style=flat&logo=npm&label=npm&labelColor=yellow&color=red) ![postgresql version](https://img.shields.io/npm/v/pg?style=flat&logo=postgresql&logoColor=aqua&logoSize=auto&label=postgresql-npm) 

<p align="left">
    <img src="https://img.shields.io/github/languages/top/LukeHunter1991/Inventory_Management_System?style=flat&color=blue" />
    <img src="https://img.shields.io/github/repo-size/LukeHunter1991/Inventory_Management_System?style=flat&color=blue" />
    <img src="https://img.shields.io/github/issues/LukeHunter1991/Inventory_Management_System?style=flat&color=blue" />
    <img src="https://img.shields.io/github/last-commit/LukeHunter1991/Inventory_Management_System?style=flat&color=blue" >
</p>

## Description

Inventory Management System is full-stack Model-View-Controller configurated application which uses Handlebars.js as templating language, Sequelize as the Object-relational mapping processing technique for data handling and database operations, and the express-session npm package for authentication.

## Table of Contents 

- [Installation](#installation)
- [User Story](#user-story)
- [Usage Info](#usage-info)
- [Tests Instructions](#test-instructions)
- [Acceptance Criteria](#acceptance-criteria)
- [DB Schema](#dbschema)
- [License](#license)

## Installation
Because we need PostgreSQL database it should be installed at local machine drive and then loaded into npm node module packages. Installation process for postgresql we can find here [PostgreSQL Databse Installation](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads). During the installation process default port should be `5432`. After database is installed localy npm pg packages should be loaded into node modules over cli terminal.

```bash
$ npm install pg
```
After packages are loaded database credentials should be populated into `.env` file like username, password, and database name. Check .env file for details. Also, there is a file `./db/schema.sql` and `./seeds/seeds.sql` that can be used to set database structure and to populate database with testing seeds, just uncoment it and run. Check file `schema.sql` and `seeds.sql`. It can be runned as follows:

```console
$ psql -U postgres 
Password for user postgres:
psql (16.2)
postgres=# \i ./db/schema.sql
DROP DATABASE
CREATE DATABASE
CREATE TABLE
CREATE TABLE
CREATE TABLE
CREATE TABLE
postgres=# \i ./seeds/seeds.sql
INSERT 0 3
INSERT 0 5
INSERT 0 8
INSERT 0 5
postgres=#
```
Otherwise you can run seeds over bash terminal as follows
```bash
$ nmm run seed
```

## User story 
```
AS an employee
I WANT want to be able to borrow and return office equipment 
SO THAT I can complete my tasks efficiently

AS an administrator
I WANT want to understand what items are available, what items are being used, and which employee is using them
SO THAT I can effectively manage the intems in the inventory
```

## Acceptance criteria 
```
GIVEN responsive user intrface that accepts user inputs and perform operations on database
WHEN I start application
THEN I am presented with login interface and option to signup
WHEN I choose to signup I am redirected to signup page
THEN I have to insert my details, first name, last name, email and password
WHEN I choose to login I have to insert my credentials like email and password
THEN I am redirected to the employee dashboard
WHEN I choose to login as administrator and insert my credentials like email and password
THEN I am redirected to the admin dashboard
WHEN I am loged at employee dashboard 
THEN I am presented with currentlly borrowed item(s) and options to return the item, to make new borrow request ant to display borrow history
WHEN I choose to return the item
THEN that item is removed from currently borrowed list
WHEN I chose to make new borrow request
THEN I am presented with a list of available items that I can add to my borrow list
WHEN I choose to see borrow history
THEN I am presented with a list of all items that I have borrowed and returned in the past
```

<a id="usage-info"></a>
## Usage Info

IMS application can be helpfull to those who want to store and manage data about inventory items that can be borrowed by employees in an organisation.

<a id="contributing-guidelines"></a>
## Contributing Guidelines

Currentlly, at this stage there is no contributors but for more information any enquiry can be reffered to Question and Contact section.

<a id="test-instructions"></a>
## Test Instructions

Application runs by invoking command `$ npm start` at `~/Inventory_Management_System>` directory. Before running application, download compressed repo from githaub and installl packages globaly or at application root directory from the section [Installation](#installation). 

## License

Copyright © 2024, [IMS Project Group](https://github.com/LukeHunter1991/Inventory_Management_System). Released under the [MIT License](./LICENSE).
