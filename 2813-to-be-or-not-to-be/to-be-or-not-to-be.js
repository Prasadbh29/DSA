/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(expected) {
    return {
        toBe:function (val){
            if(val===expected)
            {
                return true
            }
            else
            {
                throw Error('Not Equal')
            }
        },
        notToBe:function (val){
            if(val!==expected)
            {
                return true
            }
            else
            {
                throw Error('Equal')
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */