CREATE DATABASE taskbd;

CREATE TABLE task(
  id SERIAL PRIMARY KEY AUTOINCREMENT
  title VARCHAR(255) UNIQUE NOT NULL,
  description VARCHAR(255) UNIQUE NOT NULL,
)