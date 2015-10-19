var tape = require("tape"),
    unique = require("..");


tape("unique(...arrays)", function(assert) {
    assert.deepEqual(unique([0, 1], [0, 1, 2], [0, 1, 2, 3]), [0, 1, 2, 3], "should return array of unique values from arrays");
    assert.end();
});
