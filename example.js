const a = { val: 'a' };
const b = {
  val: 'b',
};

if (isEqual(a, b)) console.log('a == b');

const isEqual = (x, y) => {
  return x === y;
};
