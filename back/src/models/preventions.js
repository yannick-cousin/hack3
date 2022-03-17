const connection = require('../../config/db')

const db = connection.promise()

const findMany = ()=>{
    return db.query('SELECT id, title, url, description FROM preventions').then(([result])=> result)
}

const findOne = id =>{
    const sql = 'SELECT * FROM preventions  WHERE id=?'
    return db.query(sql,[id]).then(([result])=>result[0])
}


module.exports={
    findMany,
    findOne
}