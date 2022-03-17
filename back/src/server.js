const preventionRouter = require('./routes/preventions')
const themesRouteur= require('./routes/themes')
const usersRouter= require('./routes/users')

const setupRoutes = (app) => {

    app.use('/prevention', preventionRouter)  
    app.use('/theme',themesRouteur) 
    app.use('/user',usersRouter)

}

module.exports = { setupRoutes }
