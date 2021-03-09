const Sequelize = require('sequelize');
const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:cuttings@localhost:5432/postgres';
const connection = new Sequelize(databaseUrl);

connection
  .sync()
  .then(() => console.log('Connected to database!'))
  .catch(console.error)

module.exports = connection;
