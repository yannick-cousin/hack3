const connection = require('../../config/db')

const db = connection.promise()

const findMany = () => {
  return db
    .query('SELECT id, title, url, description FROM prevention')
    .then(([result]) => result)
}

const findOne = id => {
  const sql = 'SELECT * FROM prevention  WHERE id=?'
  return db.query(sql, [id]).then(([result]) => result[0])
}

module.exports = {
  findMany,
  findOne
}
