const Sequelize = require('sequelize')
const database = require('../database')

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

module.exports = Cutting