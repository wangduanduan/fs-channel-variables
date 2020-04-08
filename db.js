const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const vars = require('./variables')

const adapter = new FileSync('db.json')
const db = low(adapter)

db.defaults({vars: []})
  .write()


vars.forEach(function (id) {
    db.get('vars')
    .push({
        id,
        url: '',
        desc: ''
    })
    .write()
})


