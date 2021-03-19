const Sequelize = require('sequelize');
const databaseUrl = process.env.DATABASE_URL;
const connection = new Sequelize(databaseUrl);

console.log("PROCES ENV DATABASE",process.env.DATABASE_URL)
connection
  .sync({ force: false })
  .then(() => console.log('Connected to database!'))
  .catch(console.error)

module.exports = connection;
