const express = require('express');
const port = process.env.PORT || 4000;

const eventsRouter = require('./events/router')
const userRouter = require('./users/router')
const cuttingRouter = require('./cuttings/router')
const commentRouter = require('./comments/router')
const pastEventRouter = require('./events-photo-album/router')
const eventPhotoRouter = require('./events-photos/router')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(eventsRouter)
app.use(userRouter)
app.use(cuttingRouter)
app.use(commentRouter)
app.use(pastEventRouter)
app.use(eventPhotoRouter)


app.listen(
  port,
  () => console.log(`Server is listening on port ${port}`)
);
