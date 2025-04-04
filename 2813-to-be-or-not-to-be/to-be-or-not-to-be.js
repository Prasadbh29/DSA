function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(unexpected) {
            if (val !== unexpected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}
