const Sequelize = require('sequelize');
const database = require('../database')

const PastEvent = database.define(
  'pastevent',
  {
    title: {
      type: Sequelize.STRING,
      field: 'Past event_title',
      allownull: false
    },
    startdate: {
      type: Sequelize.STRING,
      field: 'Past event_start_date',
      allownull: false
    },
    enddate: {
      type: Sequelize.STRING,
      field: 'Past event_end_date',
      allownull: true
    }
  }
)

module.exports = PastEvent