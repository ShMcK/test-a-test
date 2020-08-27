const sinon = require('sinon')
const path = require('path')

before(function beforeAll() {
    const dependencyModule = require(path.join(__dirname, '..', 'src', 'add.js'))
    sinon.stub(dependencyModule, 'add').callsFake((a, b) => a + b)
})