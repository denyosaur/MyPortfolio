const { Client } = require("pg");
const fs = require('fs');

const { getDatabaseUri } = require("../config");
const sql = fs.readFileSync('./sql/myportfolio.sql').toString();

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    connectionString: getDatabaseUri(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    connectionString: getDatabaseUri()
  });
};

db.query(sql, (err, res) => {
  if (err) throw err
  client.end()
})
