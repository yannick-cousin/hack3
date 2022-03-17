const preventionRouter = require('./routes/preventions')
const themesRouteur = require('./routes/themes')
const usersRouter = require('./routes/users')
const questions = require('./routes/questions')
const reponses = require('./routes/reponses')

const setupRoutes = app => {
  app.use('/prevention', preventionRouter)
  app.use('/theme', themesRouteur)
  app.use('/user', usersRouter)
  app.use('/questions', questions)
  app.use('/reponses', reponses)
}

module.exports = { setupRoutes }
