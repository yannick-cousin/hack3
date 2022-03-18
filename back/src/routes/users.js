const express = require('express')
const usersRouter = express.Router()
const User = require('../models/users')

usersRouter.get('/',(req,res)=>{
    User.findMany()
    
    .then(user => {
        
        res.status(200).json(user)
      })
      .catch(err => {
        res.status(500).send('Error retrieving users from database')
      })
})

usersRouter.get('/:id', (req, res) => {
    User.findOne(req.params.id)
      .then(users => {
        if (users) {
          res.status(200).json(users)
        } else {
          res.status(404).send('users not found')
        }
      })
      .catch(err => {
        res.status(500).send('Error retrieving users from database')
      })
  }) 

  usersRouter.put('/:id', (req, res) => {
    let existingUser = null
    User.findOne(req.params.id)
      .then(user => {
        existingUser = user
        if (!existingUser) return Promise.reject('RECORD_NOT_FOUND')
        return User.update(req.params.id, req.body)
      })
      .then(() => {
        res.status(200).json({ ...existingUser, ...req.body })
      })
      .catch(err => {
        console.error(err)
        if (err === 'RECORD_NOT_FOUND') {
          res.status(422).json({ validationErrors: validationErrors.details })
        } else {
          res.status(500).send('Error updating this user')
        }
      })
  })


module.exports= usersRouter