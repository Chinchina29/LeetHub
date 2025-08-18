/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe:function(comp){
            if(val===comp) return true;
            throw new Error("Not Equal");
        },
        notToBe:function(comp){
            if(val!==comp) return true;
            throw new Error("Equal")
        }
    };
}
expect(5).toBe(5);
expect(5).notToBe(6);
    

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */