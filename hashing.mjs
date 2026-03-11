
export function hashing(array) {
  const table = {};
  if (array && Array.isArray(array)) {
    array.forEach((val, index) => {
      table[val] = index;
    });
  }
  return table;
}
