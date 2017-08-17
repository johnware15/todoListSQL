const add = require('./commands/add.js')
const complete = require('./commands/complete.js')
const list = require('./commands/list.js')
const remove = require('./commands/remove.js')

switch(process.argv[2]) {
  case 'complete':
    complete()
    break;
  case 'add';
    add()
    break;
  case 'list':
    list()
    break;
  default:
    console.log('Please enter a command');
    console.log('Commands are add, list, and done');
}
