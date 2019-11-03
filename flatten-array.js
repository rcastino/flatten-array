/*
 * This is a simple code that defines a function to flatten an array of arbitrarily nested arrays (e.g. integers)
 * in Node.js.
 */

/**
 * Flattens an array of arbitrarily nested arrays of integers into a flat array of integers.
 * Example. Input: [[1,2,[3]],4] -> Output: [1,2,3,4].
 *
 * @param array The input array to be processed
 * @return the flat array
 */
const flattenArray = (array) => {
    return array.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten);
    }, []);
};

// exports the function above so that other modules can use them
module.exports.flattenArray = flattenArray;