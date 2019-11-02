/**
 * Unit tests for verifying the flattenArray function.
 *
 * These tests uses Mocha, a JavaScript test framework running on Node.js.
 * To compile and run the tests you can issue the following commands in a terminal window:
 * npm install (just to install the required Node.js modules)
 * npm test
 */

const assert = require('assert');
const fa = require('../flatten-array');

/**
 * The following test suit is used to test the flattenArray function.
 * The test cases are organized in two test suites.
 */
describe('TEST flattenArray function', function () {

    describe('Simple arrays: single-dimensional array of integers', function () {
        it('an empty array: [] -> []', function () {
            assert.equal(JSON.stringify(fa.flattenArray([])), '[]');
        });

        it('just one-element array: [99] -> [99]', function () {
            assert.equal(JSON.stringify(fa.flattenArray([99])), '[99]');
        });

        it('simple multi-element array: [113,4,5,1,68,7] -> [113,4,5,1,68,7]', function () {
            assert.equal(JSON.stringify(fa.flattenArray([113, 4, 5, 1, 68, 7])), '[113,4,5,1,68,7]');
        });

    });

    describe('Arrays of arbitrarily nested arrays: multi-dimensional array', function () {
        it('two levels array: [[1,2,3],4] -> [1,2,3,4]', function () {
            assert.equal(JSON.stringify(fa.flattenArray([[1, 2, 3], 4])), '[1,2,3,4]');
        });

        it('three levels array: [[1,2,[3]],4] -> [1,2,3,4]', function () {
            assert.equal(JSON.stringify(fa.flattenArray([[1, 2, [3]], 4])), '[1,2,3,4]');
        });

        it('matrix 3x3: [[0,1,2],[1,2,3],[2,3,4]] -> [0,1,2,1,2,3,2,3,4]', function () {
            let matrix = [];
            for (let i = 0; i < 3; i++) {
                matrix[i] = [];
                for (let j = 0; j < 3; j++) {
                    matrix[i][j] = i + j;
                }
            }
            assert.equal(JSON.stringify(fa.flattenArray(matrix)), '[0,1,2,1,2,3,2,3,4]');
        });
    });

});
