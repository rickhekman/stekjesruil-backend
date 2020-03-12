const { Router } = require('express');
const pastEventRouter = new Router();
const PastEvent = require('./model');
const auth = require('../auth/middleware');
const { Op } = require('sequelize');


// Create a new event photo album
pastEventRouter.post(
  '/pastevents',
  async (request, response, next) => {
    try {

      const pastEvent = await PastEvent.create(request.body)
      response.json(pastEvent)

    } catch (error) {
      next(error)
    }
  }
)

// Read all past events photo albums
pastEventRouter.get(
  '/pastevents',
  async (request, response, next) => {
    try {

      const limit = request.query.limit || 6
      const offset = request.query.offset || 0

      const pastEventsList = await PastEvent.findAndCountAll({ limit, offset })
      response.json({ pastEventsList: pastEventsList.rows, pastEventTotal: pastEventsList.count })

    } catch (error) {
      next(error)
    }
  }
)

// Read one past event photo album
pastEventRouter.get(
  '/pastevents/:id',
  async (request, response, next) => {
    try {

      const pastEvent = await PastEvent.findByPk(request.params.id)
      if (!pastEvent) {
        response.status(404).send(`That photo album doesn't exist`)
      } else {
        response.json(pastEvent)
      }

    } catch (error) {
      next(error)
    }
  }
)

// Update a past event photo album
pastEventRouter.put(
  '/pastevents/:id',
  async (request, response, next) => {
    try {

      const pastEvent = await PastEvent.findByPk(request.params.id)
      if (!pastEvent) {
        response.status(404).send(`That photo album doesn't exist`)
      } else {
        pastEvent.update(request.body)
        response.status(200).send('Photo album updated')
      }

    } catch (error) {
      next(error)
    }
  }
)

// Delete a past event photo album 
pastEventRouter.delete(
  '/pastevents/:id',
  async (request, response, next) => {
    try {

      const pastEvent = await PastEvent.findByPk(request.params.id)
      if (!pastEvent) {
        response.status(404).send(`That photo album doesn't exist`)
      } else {
        await pastEvent.destroy({
          where: {
            id: request.params.id
          }
        })
        response.status(204).send('Photo album deleted')
      }

    } catch (error) {
      next(error)
    }
  }
)
module.exports = pastEventRouter