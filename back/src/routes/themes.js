const express = require('express')
const themesRouter = express.Router()
const Theme = require('../models/themes')

themesRouter.get('/',(req,res)=>{
    Theme.findMany()
    const theme=[]
    .then(result => {
        result.forEach(th=> theme.push({
            id:th.id,
            value:th.themes,
            label:th.themes
        }))
        res.status(200).json(theme)
      })
      .catch(err => {
        res.status(500).send('Error retrieving prevention from database')
      })
})

themesRouter.get('/:id', (req, res) => {
    Theme.findOne(req.params.id)
      .then(themes => {
        if (themes) {
          res.status(200).json(themes)
        } else {
          res.status(404).send('themes not found')
        }
      })
      .catch(err => {
        res.status(500).send('Error retrieving themes from database')
      })
  }) 

module.exports= themesRouter