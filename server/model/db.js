const { Pool } = require('pg');
const db = require('../../default.json');

const PG_URI = db.POSTGRES_URL;

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// schema is here: https://docs.google.com/spreadsheets/d/1rf8I8pI8MPVz6r1UMPp32mfagXsn5TIq1Pp_sskfgls/edit?usp=sharing

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};