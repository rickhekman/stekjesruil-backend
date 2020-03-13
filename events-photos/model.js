const Sequelize = require('sequelize');
const database = require('../database');
const PastEvent = require('../events-photo-album/model')

const EventPhoto = database.define(
  'eventphoto',
  {
    url: {
      type: Sequelize.STRING,
      field: 'Event_photo_url',
      allownull: false
    }
  }
)

EventPhoto.belongsTo(PastEvent)
PastEvent.hasMany(EventPhoto)

module.exports = EventPhoto
