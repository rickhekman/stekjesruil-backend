const Sequelize = require('sequelize')
const database = require('../database')
const Cutting = require('../cuttings/model')
const User = require('../users/model')

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

Comment.belongsTo(Cutting)
Cutting.hasMany(Comment)
Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = Comment