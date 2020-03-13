const Sequelize = require('sequelize')
const database = require('../database')

const User = database.define(
  'user',
  {
    username: {
      type: Sequelize.STRING,
      field: 'Username',
      allownull: true
    },
    firstname: {
      type: Sequelize.STRING,
      field: 'First_name',
      allownull: true
    },
    lastname: {
      type: Sequelize.STRING,
      field: 'Last_name',
      allownull: true
    },
    email: {
      type: Sequelize.STRING,
      field: 'Email',
      allownull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      field: 'Password',
      allownull: false
    },
    profilephoto: {
      type: Sequelize.STRING,
      field: 'profile_photo',
      allownull: true
    },
    profilephoto: {
      type: Sequelize.STRING,
      field: 'profile_photo',
      allownull: true
    },
    address1: {
      type: Sequelize.STRING,
      field: 'User_address_1',
      allownull: true
    },
    address2: {
      type: Sequelize.STRING,
      field: 'User_address_2',
      allownull: true
    },
    zipcode: {
      type: Sequelize.STRING,
      field: 'User_zipcode',
      allownull: true
    },
    city: {
      type: Sequelize.STRING,
      field: 'User_city',
      allownull: true
    },
    state: {
      type: Sequelize.STRING,
      field: 'User_state',
      allownull: true
    },
    country: {
      type: Sequelize.STRING,
      field: 'User_country',
      allownull: true
    },
    latitude: {
      type: Sequelize.STRING,
      field: 'User_latitude',
      allownull: true
    },
    longitude: {
      type: Sequelize.STRING,
      field: 'User_longitude',
      allownull: true
    },
    admin: {
      type: Sequelize.BOOLEAN,
      field: 'User_admin',
      allownull: true,
      defaultValue: false
    }
  }
)

module.exports = User
