const Sequelize = require('sequelize')
const database = require('../database')

const Comment = database.define(
  'comment',
  {
    comment: {
      type: Sequelize.TEXT,
      field: 'Comment',
      allownull: true
    }
  }
)

module.exports = Comment