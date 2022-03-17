const express = require('express')
const connection = require('../../config/db')
const Router = express.Router()

Router.get('/', (req, res) => {
  const sql = 'SELECT * FROM quizz'

  connection.connect()

  connection.query(sql, (err, result) => {
    if (err) {
      console.error('Error GET quizz', err)
    } else {
      res.status(200).json(result)
    }
  })
  console.log('GET on quizz !')
})

module.exports = Router
