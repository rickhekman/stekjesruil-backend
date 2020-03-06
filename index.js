const express = require('express');
const port = process.env.PORT || 4000;

const eventsRouter = require('./events/router')

const cors = require('cors')
const bodyParser = require('body-parser')

const app = express();

const corsMiddleware = cors()
app.use(corsMiddleware)

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use(eventsRouter)

app.listen(
  port,
  () => console.log(`Server is listening on port ${port}`)
);