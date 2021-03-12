const Sequelize = require('sequelize');
const databaseUrl = process.env.DATABASE_URL;
const connection = new Sequelize(databaseUrl);

connection
  .sync({ force: false })
  .then(() => console.log('Connected to database!'))
  .catch(console.error)

module.exports = connection;
