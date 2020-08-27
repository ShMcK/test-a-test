const sinon = require('sinon')
const path = require('path')

before(function beforeAll() {
    // mock the file with the real answer
    const dependencyModule = require(path.join(__dirname, '..', 'src', 'add.js'))
    sinon.stub(dependencyModule, 'add').callsFake((a, b) => a + b)
})