/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Use BigInt to safely handle edge cases like Math.abs(INT_MIN)
    let a = BigInt(dividend);
    let b = BigInt(divisor);

    const negative = (a < 0n) !== (b < 0n);
    a = a < 0n ? -a : a;
    b = b < 0n ? -b : b;

    let result = 0n;

    while (a >= b) {
        let temp = b, multiple = 1n;
        while ((temp << 1n) <= a) {
            temp <<= 1n;
            multiple <<= 1n;
        }
        a -= temp;
        result += multiple;
    }

    if (negative) result = -result;

    // Clamp to 32-bit signed integer range
    if (result > BigInt(INT_MAX)) return INT_MAX;
    if (result < BigInt(INT_MIN)) return INT_MIN;
    return Number(result);
};
