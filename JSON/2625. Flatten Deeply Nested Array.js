/**
 * @param {Array} arr
 * @param {number} n
 * @return {Array}
 */
var flat = function(arr, n) {

    let result = [];

    function flatten(currentArr, currentDepth) {

        for (let item of currentArr) {

            if (Array.isArray(item) && currentDepth > 0) {

                flatten(item, currentDepth - 1);

            } else {

                result.push(item);
            }
        }
    }

    flatten(arr, n);

    return result;
};