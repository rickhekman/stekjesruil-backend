const Sequelize = require('sequelize')
const databaseUrl = 'postgres://postgres:cuttings@localhost:5432/postgres'
const connection = new Sequelize(databaseUrl)

connection
  .sync({ force: false })
  .then(() => console.log('Connected to database!'))
  .catch(console.error)

module.exports = connection;
