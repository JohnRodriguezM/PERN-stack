const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "0906",
  host: "localhost",
  port: 5432,
  database: "taskdb",
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error("Error acquiring client", err.stack);
  }
  console.log("Connected to PostgreSQL database");
  client.query("SELECT NOW()", (err, result) => {
    release();
    if (err) {
      return console.error("Error executing query", err.stack);
    }
    console.log("Result:", result.rows[0]);
  });
});

module.exports = pool;
