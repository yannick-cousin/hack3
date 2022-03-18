const express = require('express');
const reponsesRouter = express.Router()
const Reponse = require('../models/reponses')

reponsesRouter.get('/:id', (req, res) => {
  
 
  Reponse.findOne(req.params.id).then(reponse=>{
   if (reponse){
     res.status(200).json(reponse)
   } else{
     res.status(404).send('reponse not found')
   }
  })
  .catch(err=>{
    res.status(500).send('Error retrieving reponse from database')
  })
})
 

module.exports = reponsesRouter
