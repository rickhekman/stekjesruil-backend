const Sequelize = require('sequelize');
const database = require('../database');
const User = require('../users/model');


const Cutting = database.define(
  'cutting',
  {
    name: {
      type: Sequelize.STRING,
      field: 'Cutting_name',
      allownull: false
    },
    photo: {
      type: Sequelize.STRING,
      field: 'Cutting_photo',
      allownull: true
    },
    description: {
      type: Sequelize.TEXT,
      field: 'Cutting_description',
      allownull: true
    }
  }
)

Cutting.belongsTo(User)
User.hasMany(Cutting)


module.exports = Cutting
