const express = require('express')
const usersRouter = express.Router()
const User = require('../models/users')

usersRouter.get('/',(req,res)=>{
    User.findMany()
    const user=[]
    .then(result => {
        result.forEach(us=> user.push({
            id:us.id,
            firstname: us.firstname,
            lastname: us.lastname,
            points: us.points,
            manager: us.manager,
            admin: us.admin,
            isTechnician_id: us.isTechnician_id
        }))
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

module.exports= usersRouter