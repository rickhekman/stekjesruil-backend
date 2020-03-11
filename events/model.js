const Sequelize = require('sequelize');
const database = require('../database')

const Event = database.define(
  'event',
  {
    title: {
      type: Sequelize.STRING,
      field: 'Event_title',
      allownull: true
    },
    photo: {
      type: Sequelize.STRING,
      field: 'Event_photo',
      allownull: true
    },
    description: {
      type: Sequelize.TEXT,
      field: 'Event_desciption',
      allownull: true
    },
    startdate: {
      type: Sequelize.STRING,
      field: 'Event_start_date',
      allownull: true
    },
    enddate: {
      type: Sequelize.STRING,
      field: 'Event_end_date',
      allownull: true
    },
    locationname: {
      type: Sequelize.STRING,
      field: 'Location_name',
      allownull: true
    },
    address1: {
      type: Sequelize.STRING,
      field: 'Location_address_1',
      allownull: true
    },
    address2: {
      type: Sequelize.STRING,
      field: 'Location_address_2',
      allownull: true
    },
    zipcode: {
      type: Sequelize.STRING,
      field: 'Location_zipcode',
      allownull: true
    },
    city: {
      type: Sequelize.STRING,
      field: 'Location_city',
      allownull: true
    },
    country: {
      type: Sequelize.STRING,
      field: 'Location_country',
      allownull: true
    },
    website: {
      type: Sequelize.STRING,
      field: 'Location_website',
      allownull: true
    },
    latitude: {
      type: Sequelize.STRING,
      field: 'Location_latitude',
      allownull: true
    },
    longitude: {
      type: Sequelize.STRING,
      field: 'Location_longitude',
      allownull: true
    },
    eventurl: {
      type: Sequelize.STRING,
      field: 'Event_socialUrl',
      allownull: true
    }
  }
)

module.exports = Event