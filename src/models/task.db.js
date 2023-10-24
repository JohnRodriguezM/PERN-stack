const { Pool } = require("pg");

const { db } = require("../config");

const pool = new Pool(db);

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
