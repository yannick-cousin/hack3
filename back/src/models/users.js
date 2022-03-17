const connection = require('../../config/db')

const db = connection.promise()

const findMany=()=>{
    return db.query('SELECT id, firstname, lastname, points, manager, admin,  isTechnician_id FROM users').then(([result])=>result)
}

const findOne = id =>{
    const sql = 'SELECT * FROM users WHERE id=?'
    return db.query(sql,[id]).then(([result])=>result[0])
}

module.exports={
    findMany,
    findOne
}