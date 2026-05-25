/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
      const len = nums.length;
    let result = init;
    for (let i = 0; i < len; i++){
        result = fn(result, nums[i]);
    }
    return result;
};/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
      const len = nums.length;
    let result = init;
    for (let i = 0; i < len; i++){
        result = fn(result, nums[i]);
    }
    return result;
};