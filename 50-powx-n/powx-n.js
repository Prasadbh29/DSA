/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // Handle negative exponent
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let result = 1;
    while (n > 0) {
        // If n is odd, multiply result by current x
        if (n % 2 === 1) {
            result *= x;
        }
        x *= x;      // square the base
        n = Math.floor(n / 2); // halve the exponent
    }

    return result;
};
