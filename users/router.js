const { Router } = require('express');
const userRouter = new Router();

const User = require('./model')
const bcrypt = require('bcrypt')
const { toJWT } = require('../auth/jwt')

// Create a user account
userRouter.post(
  '/signup',
  async (request, response) => {
    if (!request.body.email || !request.body.password) {
      return response
        .status(400)
        .send("Missing email or password in request body");
    }
    const hashedPassword = bcrypt.hashSync(request.body.password, 10);
    try {
      await User.create({
        ...request.body,
        password: hashedPassword
      });
      response.status(201).send("User created");
    } catch (error) {
      // console.log(error.name);
      switch (error.name) {
        case "SequelizeUniqueConstraintError":
          return response.status(400).send({ message: "Email not unique" });

        default:
          return response.status(400).send("Bad request");
      }
    }
  }
)

// Login user
userRouter.post(
  '/login',
  async (request, response) => {
    // console.log("LOGIN REQUEST BODY", request.body);
    try {
      const user = await User.findOne({ where: { email: request.body.email } });

      if (!user) {
        response.status(400).send({
          message: "User with that email does not exist"
        });
      }
      const passwordValid = bcrypt.compareSync(
        request.body.password,
        user.password
      );
      if (passwordValid) {
        const token = toJWT({ id: user.id });
        return response.status(200).send({
          token: token,
          email: user.email,
          username: user.username,
          id: user.id
        });
      }
      if (!passwordValid) {
        response.status(400).send({
          message: "Password was incorrect"
        });
      }
    } catch (error) {
      response.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }
  }
)

// Read all users
userRouter.get(
  '/users',
  async (request, response, next) => {
    try {

      const limit = request.query.limit || 9
      const offset = request.query.offset || 0

      const usersList = await User.findAndCountAll({ limit, offset })
      response.json({ usersrows: usersList.rows, usertotal: usersList.count })

    } catch (error) {
      next(error)
    }
  }
)

//Read one user
userRouter.get(
  '/users/:id',
  async (request, response, next) => {
    try {

      const user = await User.findByPk(request.params.id)
      if (!user) {
        response.status(404).send(`That user doesn't exist`)
      } else {
        response.json(user)
      }

    } catch (error) {
      next(error)
    }
  }
)

// Update user
userRouter.put(
  '/users/:id',
  async (request, response, next) => {
    try {

      const user = await User.findByPk(request.params.id)
      if (!user) {
        response.status(404).send(`That user doesn't exist`)
      } else {
        user.update(request.body)
        response.status(200).send('User updated')
      }

    } catch (error) {
      next(error)
    }
  }
)

// Delete user
userRouter.delete(
  '/users/:id',
  async (request, response, next) => {
    try {
      const user = await User.findByPk(request.params.id)
      if (!user) {
        response.status(404).send(`That user doesn't exist`)
      } else {
        await user.destroy({
          where: {
            id: request.params.id
          }
        })
        response.status(204).send(`User deleted`)
      }

    } catch (error) {
      next(error)
    }
  }
)

module.exports = userRouter