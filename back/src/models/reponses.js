const connection = require('../../config/db')

const db = connection.promise()


const findOne = id =>{
    const sql = 'SELECT id, reponse,trueFalse FROM answers WHERE quizz_id=?'
    return db.query(sql,[id]).then(([result])=>result)
}


module.exports={
    findOne
}