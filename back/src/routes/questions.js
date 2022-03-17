const express = require('express')
const questionsRouter = express.Router()
const Question = require('../models/questions')

questionsRouter.get('/', (req, res) => {
  Question.findMany()
    .then(question => {
      res.status(200).json(question)
    })
    .catch(err => {
      res.status(500).send('Error retrieving questions from database')||console.log(err)
    })
})

module.exports = questionsRouter;
