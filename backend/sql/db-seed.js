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

// db.connect('postgres://portfolio_be_user:12IeIbLpbcZijNRsT8UyjrNA9u9XAAGY@dpg-cfmp86arrk0eqlrme8sg-a.oregon-postgres.render.com/portfolio_be', function (err, client, done) {
//   if (err) {
//     console.log('error: ', err);
//     process.exit(1);
//   }
//   client.query(sql, function (err, result) {
//     done();
//     if (err) {
//       console.log('error: ', err);
//       process.exit(1);
//     }
//     process.exit(0);
//   });
// });

db.query(sql, (err, res) => {
  if (err) throw err
  console.log(res)
  client.end()
})
