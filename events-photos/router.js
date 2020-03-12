const { Router } = require('express');
const eventPhotoRouter = new Router();
const EventPhoto = require('./model');
const auth = require('../auth/middleware');
const { Op } = require('sequelize');


// Create a new event photo
eventPhotoRouter.post(
  '/eventphotos',
  async (request, response, next) => {
    try {

      const eventphoto = await EventPhoto.create(request.body)
      response.json(eventphoto)

    } catch (error) {
      next(error)
    }
  }
)

// Read all event photos
eventPhotoRouter.get(
  '/eventphotos',
  async (request, response, next) => {
    try {

      const limit = request.query.limit || 6
      const offset = request.query.offset || 0

      const eventphotosList = await EventPhoto.findAndCountAll({ limit, offset })
      response.json({ photosList: eventphotosList.rows, photoTotal: eventphotosList.count })

    } catch (error) {
      next(error)
    }
  }
)

// Read one event photo
eventPhotoRouter.get(
  '/eventphotos/:id',
  async (request, response, next) => {
    try {

      const eventphoto = await EventPhoto.findByPk(request.params.id)
      if (!eventphoto) {
        response.status(404).send(`That photo doesn't exist`)
      } else {
        response.json(eventphoto)
      }

    } catch (error) {
      next(error)
    }
  }
)

// Update a event photo 
eventPhotoRouter.put(
  '/eventphotos/:id',
  async (request, response, next) => {
    try {

      const eventphoto = await EventPhoto.findByPk(request.params.id)
      if (!eventphoto) {
        response.status(404).send(`That photo doesn't exist`)
      } else {
        eventphoto.update(request.body)
        response.status(200).send('Photo updated')
      }

    } catch (error) {
      next(error)
    }
  }
)

// Delete a event photo
eventPhotoRouter.delete(
  '/eventphotos/:id',
  async (request, response, next) => {
    try {

      const eventphoto = await EventPhoto.findByPk(request.params.id)
      if (!eventphoto) {
        response.status(404).send(`That photo doesn't exist`)
      } else {
        await eventphoto.destroy({
          where: {
            id: request.params.id
          }
        })
        response.status(204).send('Photo deleted')
      }

    } catch (error) {
      next(error)
    }
  }
)
module.exports = eventPhotoRouter