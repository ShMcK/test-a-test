const assert = require('assert');
const { add } = require('./add')

describe('Add function', function () {
    it('should add two numbers together', () => {
        assert.equal(add(1, 2), 3)
        assert.equal(add(40, 2), 42)
    })
});