function convert(s, numRows) {
  if (numRows === 1 || s.length <= numRows) return s;

  const rows = Array(Math.min(numRows, s.length)).fill("");
  let currRow = 0;
  let goingDown = false;

  for (let char of s) {
    rows[currRow] += char;
    if (currRow === 0 || currRow === numRows - 1) goingDown = !goingDown;
    currRow += goingDown ? 1 : -1;
  }

  return rows.join("");
}
