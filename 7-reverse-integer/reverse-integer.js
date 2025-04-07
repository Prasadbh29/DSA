function reverse(x) {
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  let reversed = 0;
  let num = Math.abs(x);

  while (num > 0) {
    const digit = num % 10;
    num = Math.floor(num / 10);

    // Check for overflow before pushing the digit
    if (
      reversed > Math.floor(INT_MAX / 10) ||
      (reversed === Math.floor(INT_MAX / 10) && digit > 7)
    ) {
      return 0;
    }

    reversed = reversed * 10 + digit;
  }

  return x < 0 ? -reversed : reversed;
}
