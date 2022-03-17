const connection = require('../../config/db')

const db = connection.promise()

const findMany=()=>{
    return db.query('SELECT * FROM users').then(([results])=>results)
}

const findOne = id =>{
    const sql = 'SELECT * FROM users WHERE id=?'
    return db.query(sql,[id]).then(([result])=>result[0])
}

//UPDATE ONE
const update = (id, newAttributes) => {
    return db.query('UPDATE users SET ? WHERE id= ?', [newAttributes, id])
  }

module.exports={
    findMany,
    findOne,
    update
}