const { Client } = require('pg')
const client = new Client({
  user: 'johnware15',
  host: 'localhost',
  database: process.env.node.NODE_ENV === 'test' ? 'todolist_test' : 'todolist',
  port: '5432'
})
client.connect()

module.exports = client
