const distance = (a, b) => {
  // TODO: implement the function
  if (
    !(typeof a === "string" || a instanceof String) ||
    !(typeof b === "string" || b instanceof String)
  )
    throw new TypeError("InvalidType");

  if (!a.length) return b.length;
  if (!b.length) return a.length;

  const grid = [];

  for (let i = 0; i <= b.length; i++) {
    grid[i] = [i];
    for (let j = 1; j <= a.length; j++) {
      grid[i][j] =
        i === 0
          ? j
          : Math.min(
              grid[i - 1][j] + 1,
              grid[i][j - 1] + 1,
              grid[i - 1][j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1)
            );
    }
  }

  return grid[b.length][a.length];
};
module.exports.distance = distance;
