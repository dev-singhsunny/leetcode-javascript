/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
        const hash = {};

    this.forEach((ele) => {
        const key = fn(ele);

        if(key in hash){
            hash[key].push(ele);
        }else{
            hash[key] = [ele]
        }
    });

    return hash;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */