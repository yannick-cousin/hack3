const express = require('express')
const preventionRouter = express.Router()
const Prevention = require('../models/preventions')


preventionRouter.get('/', (req, res) => {
    const prevention=[]
    Prevention.findMany()
      .then(result => {
        result.forEach(pr=> prevention.push({
            id: pr.id,
            value: pr.title,
            label: pr.title,
            url: pr.url,
            description: pr.description
        }))
        res.status(200).json(prevention)
      })
      .catch(err => {
        res.status(500).send('Error retrieving prevention from database')
      })
  })
  
  preventionRouter.get('/:id', (req, res) => {
    Prevention.findOne(req.params.id)
      .then(prevention => {
        if (prevention) {
          res.status(200).json(prevention)
        } else {
          res.status(404).send('prevention not found')
        }
      })
      .catch(err => {
        res.status(500).send('Error retrieving prevention from database')
      })
  }) 


module.exports = preventionRouter
