const { createConnection } = require('mysql2')
const { createCodeSubmissionTableQuery } = require("../queries/createTable")
require('dotenv').config()
const db = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  port: process.env.DATABASE_PORT
}

function createTable() {
  return new Promise((resolve, reject) => {
    const connection = createConnection(db);

    connection.query("SHOW TABLES LIKE 'code_submissions'", (err, result) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        if (result.length === 0) {
          connection.query(createCodeSubmissionTableQuery, (err) => {
            if (err) {
              console.error(err);
              reject(err);
            } else {
              console.log("Table Created Successfully");
              resolve(true);
            }
            connection.end();
          });
        } else {
          console.log("Table already exists");
          resolve(true);
          connection.end();
        }
      }
    });
  });
}
module.exports = { db, createTable }
