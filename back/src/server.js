const preventionRouter = require('./routes/preventions')
const themesRouteur = require('./routes/themes')
const usersRouter = require('./routes/users')
const questionsRouter = require('./routes/questions')
const reponsesRouter = require('./routes/reponses')
const videosRouter = require('./routes/videos')

const setupRoutes = app => {
  app.use('/prevention', preventionRouter)
  app.use('/theme', themesRouteur)
  app.use('/user', usersRouter)
  app.use('/questions', questionsRouter)
  app.use('/reponses', reponsesRouter)
  app.use('/videos', videosRouter)
}

module.exports = { setupRoutes }
