function romanToInt(s) {
  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    // If the next value is greater, subtract the current
    if (next > current) {
      total += next - current;
      i++; // Skip the next character since it's already used
    } else {
      total += current;
    }
  }

  return total;
}
