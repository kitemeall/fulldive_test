var bottles = require("./third");
var assert = require('assert');

describe('third task', function() {
    it('objects have to be same', function() {
        assert.deepEqual(
            [ { '1': 1, '2': 2, '3': 1 },
                { '3': 2, '4': 1 },
                { '4': 1 },
                { '4': 2 } ], bottles([1,2,3,4], [4,3,1,2]));
    });
    it('objects have to be same', function() {
        assert.deepEqual(
            [ { '1': 1, '2': 2, '3': 1 },
                { '3': 2, '4': 1 },
                { '4': 3, '5': 7 },
                { '5': 1 },
                { '5': 2 } ]
            , bottles([1,2,3,4, 10], [4,3,10,1,2]));
    });
});
