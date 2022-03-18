const express = require('express')
const videosRouter = express.Router()
const Video = require('../models/videos')

videosRouter.get('/', (req, res) => {
  Video.findMany()
    .then(video => {
      res.status(200).json(video)
    })
    .catch(err => {
      res.status(500).send('Error retrieving questions from database') ||
        console.log(err)
    })
})

module.exports = videosRouter
