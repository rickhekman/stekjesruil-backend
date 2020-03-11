const Sequelize = require('sequelize');
const database = require('../database')

const eventPhoto = database.define(
  'eventphoto',
  {
    url: {
      type: Sequelize.STRING,
      field: 'Event_photo_url',
      allownull: false
    }
  }
)

module.exports = eventPhoto