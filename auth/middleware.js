const User = require('../user/model');
const { toData } = require('./jwt');

async function auth(request, response, next) {
  const auth =
    request.headers.authorization && request.headers.authorization.split(" ");
  // console.log('\n\n\n AUTH TEST!!!', auth)
  if (auth && auth[0] === "Bearer" && auth[1]) {
    try {
      const data = toData(auth[1]);
      // console.log('\n\n\n DATA TEST!!!', data)
      const user = await User.findByPk(data.id);
      // console.log('\n\n\n USER TEST!!', user.dataValues)
      if (!user) return next("User does not exist");

      request.user = user;
      next();

    } catch (error) {
      response.status(400).send({
        message: `Error ${error.name}: ${error.message}`
      });
    }

  } else {
    response.status(401).send({
      message: "Please supply some valid credentials"
    });
  }
}

module.exports = auth;

