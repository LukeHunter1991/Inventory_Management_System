DROP DATABASE IF EXISTS inventory_db;
CREATE DATABASE inventory_db;

-- \c inventory_db;

-- -- Creating the categories table
CREATE TABLE categories (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

-- -- Creating the employees table
CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE,
password VARCHAR(100) NOT NULL,
is_admin BOOLEAN DEFAULT FALSE
);

-- -- Creating the items table
CREATE TABLE items (
id SERIAL PRIMARY KEY,
item_name VARCHAR(100) NOT NULL,
description VARCHAR(255),
available BOOLEAN DEFAULT TRUE,
category_id INTEGER REFERENCES categories(id)
);

-- -- Creating the transactions table
CREATE TABLE transactions (
id SERIAL PRIMARY KEY,
borrow_date TIMESTAMP NOT NULL,
return_date TIMESTAMP,
user_id INTEGER REFERENCES employees(id),
items_id INTEGER REFERENCES items(id)
);