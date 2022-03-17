const connection = require('../../config/db')

const db = connection.promise()

const findMany=()=>{
    return db.query('SELECT * FROM quizz').then(([result])=>result)
}


module.exports={
    findMany
}