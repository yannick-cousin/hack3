const connection = require('../../config/db')

const db = connection.promise()

const findMany=()=>{
    return db.query('SELECT * FROM users').then(([results])=>results)
}

const findOne = id =>{
    const sql = 'SELECT * FROM users WHERE id=?'
    return db.query(sql,[id]).then(([result])=>result[0])
}

module.exports={
    findMany,
    findOne
}