DROP DATABASE IF EXISTS great_bay_db;

CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NOT NULL,
  retail_price DECIMAL(10,2) NOT NULL,
  starting_bid DECIMAL(10,2) NOT NULL,
  current_bid DECIMAL(10,2) NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_name, retail_price, starting_bid, current_bid, quantity)
VALUES ("iPhone X", 999.99, 200, 200, 17);

INSERT INTO products (item_name, retail_price, starting_bid, current_bid, quantity)
VALUES ("Subaru WRX", 26990, 10000, 10000, 8);

INSERT INTO products (item_name, retail_price, starting_bid, current_bid, quantity)
VALUES ("Macbook Pro", 3299.00, 150, 150, 14);