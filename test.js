const path = require('path')
const flatfile = require('flat-file-db')
const promisify = require('then-flat-file-db')
const test = require('micro-analytics-cli/adapter-tests/unit-tests')

const db = promisify(flatfile.sync(path.resolve(process.cwd(), process.env.DB_NAME || 'views.db')))
const adapter = require('./index')


test({
  name: 'flat-file-db',
  modulePath: path.resolve(__dirname, './index.js'),
  beforeAll: () => {
    adapter.init({ dbName: 'views.db' })
  },
  beforeEach: () => {
    return db.clear();
  }
})
