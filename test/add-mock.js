const sinon = require('sinon')
const path = require('path')

before(function beforeAll() {
    const dependencyModule = require(path.join(__dirname, '..', 'src', 'add.js'))
    sinon.stub(dependencyModule, 'add').returns(3)
})