const client = require('./pg')
const text = 'SELECT * FROM tasks WHERE isComplete = false'

const list = () => {client.query(text)
  .then(res => console.log(res.rows.map(x => {
    let desc = x.description
    let ids = x.id
    //Study SQL notation
    return `${ids} ${desc}`
  })))
  .catch(err => console.log(err))}

  module.exports = list
