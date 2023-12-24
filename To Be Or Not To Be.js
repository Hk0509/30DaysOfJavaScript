/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe: (data) =>{
            if(val === data) return true;
            else{
                const error = new Error ("Not Equal");
                throw error;
            }
        },

        notToBe: (data) =>{
            if(val !== data) return true;
            else{
                const error = new Error ("Equal");
                throw error;
            }
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
