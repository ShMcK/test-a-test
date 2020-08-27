const assert = require('assert');
const Mocha = require('mocha')
const path = require('path')

const mocha = new Mocha()

describe('testATest', function () {
    it('all tests should pass', () => {
        mocha
        .addFile(path.join(__dirname, './add-mock.js'))
        .addFile(path.join(__dirname, '..', 'src', 'aTest.js'))
        .run(((failures) => {
            assert.equal(failures, 0)
        }))
    })
});