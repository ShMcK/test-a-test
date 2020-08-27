const assert = require('assert');
const Mocha = require('mocha')
const path = require('path')

const mocha = new Mocha()

describe('testATest', function () {
    it('all tests should pass', () => {
        mocha
        // mock the code file
        .addFile(path.join(__dirname, './add-mock.js'))
        // load the test file
        .addFile(path.join(__dirname, '..', 'src', 'aTest.js'))
        // call the test runner
        .run(((failures) => {
            assert.equal(failures, 0)
        }))
    })
});