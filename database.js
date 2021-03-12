const Sequelize = require('sequelize');
const databaseUrl = process.env.DATABASE_URL;
const connection = new Sequelize(databaseUrl, 'username', 'password', {
  host: 'heroku',
  dialect: 'postgres'
});

connection
  .sync({ force: false })
  .then(() => console.log('Connected to database!'))
  .catch(console.error)

module.exports = connection;
