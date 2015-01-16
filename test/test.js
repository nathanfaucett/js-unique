var assert = require("assert"),
    unique = require("../src/index");


describe("unique(...arrays)", function() {
    it("should return array of unique values from arrays in arguments", function() {

        assert.deepEqual(unique([0, 1], [0, 1, 2], [0, 1, 2, 3]), [0, 1, 2, 3]);
    });
});
