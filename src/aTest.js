const assert = require('assert');
// add will be mocked by test/add-mock.js
const { add } = require('./add')

// tests to test
describe('Add function', function () {
    it('should add two numbers together', () => {
        assert.equal(add(1, 2), 3)
        assert.equal(add(40, 2), 42)
    })
});