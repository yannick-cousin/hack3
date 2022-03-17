const express = require('express');
const connection = require('../../config/db');
const Router = express.Router();

Router.get('/:id', (req, res) => {

  console.log('PARAM_URL',req.params.id)
  const sql = 'SELECT id,reponse,trueFalse FROM answers WHERE quizz_id=?';

  connection.connect();

  connection.query(sql,[req.params.id], (err, result) => {
    if (err){
      res.status(404).send('Answers not found !')
      console.error('Error GET answers',err)
    } else{
      res.status(200).json(result);
    }

  });
  console.log('GET on answers!');
});

module.exports = Router;
