const { Router } = require('express');
const auth = require('../auth/middleware');
const Cutting = require('./model');
const cuttingRouter = new Router();

// Create a new cutting
cuttingRouter.post(
  '/cuttings', auth,
  async (request, response, next) => {
    try {

      const Id = request.user.id
      const authCutting = { ...request.body.newCuttingData, userId: Id }
      const cutting = await Cutting.create(authCutting)
      response.json(cutting)

    } catch (error) {
      next(error)
    }
  }
)

// Read all cuttings
cuttingRouter.get(
  '/cuttings',
  async (request, response, next) => {
    try {

      const limit = request.query.limit || 9
      const offset = request.query.offset || 0

      const cuttingsList = await Cutting.findAndCountAll({ limit, offset })
      response.json({ cuttingsList: cuttingsList.rows, cuttingTotal: cuttingsList.count })

    } catch (error) {
      next(error)
    }
  }
)

//Read one cutting
cuttingRouter.get(
  '/cuttings/:id',
  async (request, response, next) => {
    try {

      const cutting = await Cutting.findByPk(request.params.id)
      if (!cutting) {
        response.status(404).send(`That cutting doesn't exist`)
      } else {
        response.json(cutting)
      }

    } catch (error) {
      next(error)
    }
  }
)

// Update cutting
cuttingRouter.put(
  '/cuttings/:id',
  async (request, response, next) => {
    try {

      const cutting = await Cutting.findByPk(request.params.id)
      if (!cutting) {
        response.status(404).send(`That cutting doesn't exist`)
      } else {
        cutting.update(request.body)
        response.status(200).send('Cutting updated')
      }

    } catch (error) {
      next(error)
    }
  }
)

// Delete cutting
cuttingRouter.delete(
  '/cuttings/:id',
  async (request, response, next) => {
    try {
      const cutting = await Cutting.findByPk(request.params.id)
      if (!cutting) {
        response.status(404).send(`That cutting doesn't exist`)
      } else {
        await cutting.destroy({
          where: {
            id: request.params.id
          }
        })
        response.status(204).send(`Cutting deleted`)
      }

    } catch (error) {
      next(error)
    }
  }
)

module.exports = cuttingRouter
