const { Router } = require('express');
const commentRouter = new Router();
const Comment = require('./model');

// Create a new comment
commentRouter.post(
  '/comments',
  async (request, response, next) => {
    try {

      const comment = await Comment.create(request.body)
      response.json(comment)

    } catch (error) {
      next(error)
    }
  }
)

// Read all comments
commentRouter.get(
  '/comments',
  async (request, response, next) => {
    try {

      const limit = request.query.limit || 12
      const offset = request.query.offset || 0

      const commentsList = await Comment.findAndCountAll({ limit, offset })
      response.json({ commentsList: commentsList.rows, commentTotal: commentsList.count })

    } catch (error) {
      next(error)
    }
  }
)

//Read one comment
commentRouter.get(
  '/comments/:id',
  async (request, response, next) => {
    try {

      const comment = await Comment.findByPk(request.params.id)
      if (!comment) {
        response.status(404).send(`That comment doesn't exist`)
      } else {
        response.json(comment)
      }

    } catch (error) {
      next(error)
    }
  }
)

// Update comment
commentRouter.put(
  '/comments/:id',
  async (request, response, next) => {
    try {

      const comment = await Comment.findByPk(request.params.id)
      if (!comment) {
        response.status(404).send(`That comment doesn't exist`)
      } else {
        comment.update(request.body)
        response.status(200).send('Comment updated')
      }

    } catch (error) {
      next(error)
    }
  }
)

// Delete comment
commentRouter.delete(
  '/comments/:id',
  async (request, response, next) => {
    try {

      const comment = await Comment.findByPk(request.params.id)
      if (!comment) {
        response.status(404).send(`That comment doesn't exist`)
      } else {
        await comment.destroy({
          where: {
            id: request.params.id
          }
        })
        response.status(204).send(`Comment deleted`)
      }

    } catch (error) {
      next(error)
    }
  }
)

module.exports = commentRouter