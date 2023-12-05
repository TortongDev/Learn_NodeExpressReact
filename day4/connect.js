const {Client} = require('pg');
 
const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'db_nodejs_react',
  user: 'postgres',
  password: '12345',
})
module.exports = client;