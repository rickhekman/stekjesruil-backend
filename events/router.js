const { Router } = require('express')
const eventRouter = new Router()
const Event = require('./model')
const { Op } = require('sequelize')


// Create a new event
eventRouter.post(
  '/events',
  async (request, response, next) => {
    try {
      const event = await Event.create(request.body)
      response.json(event)

    } catch (error) {
      next(error)
    }
  }
)

// Read all events
eventRouter.get(
  '/events',
  async (request, response, next) => {
    try {

      const eventsList = await Event.findAll()
      response.json(eventsList)

    } catch (error) {
      next(error)
    }
  }
)

// Read one event
eventRouter.get(
  '/events/:id',
  async (request, response, next) => {
    try {

      const event = await Event.findByPk(request.params.id)
      if (!event) {
        response.status(404).send(`This event doesn't exist`)
      } else {
        response.json(event)
      }

    } catch (error) {
      next(error)
    }
  }
)

// Update an event
eventRouter.put(
  '/events/:id',
  async (request, response, next) => {
    try {

      const event = await Event.findByPk(request.params.id)
      if (!event) {
        response.status(404).send(`This event doesn't exist`)
      } else {
        event.update(request.body)
        response.status(200).send('Event updated')
      }

    } catch (error) {
      next(error)
    }
  }
)

// Delete an event 
eventRouter.delete(
  '/events/:id',
  async (request, response, next) => {
    try {

      const event = await Event.findByPk(request.params.id)
      if (!event) {
        response.status(404).send(`This event doesn't exist`)
      } else {
        await event.destroy({
          where: {
            id: request.params.id
          }
        })
        response.status(204).send('Event deleted')
      }

    } catch (error) {
      next(error)
    }
  }
)
module.exports = eventRouter