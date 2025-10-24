console.log('реализация Math.floor')

function myFloor(a) {
  a = Number(a);

  if (isNaN(a)) return NaN;
  if (a === 0 || a === Infinity || a === -Infinity) return a;

  const str = a.toString();
  const dot = str.indexOf('.');

  if (dot === -1) return a;

  const intPart = Number(str.slice(0, dot));

  if (a >= 0) return intPart;
  return (a === intPart) ? intPart : intPart - 1;
}

console.log(myFloor(2.9));
console.log(myFloor(4.1));
console.log(myFloor(19.5));
console.log(myFloor(21.9));
console.log(myFloor(-3.2));
console.log(myFloor(-7.0));

console.log('реализация Math.round')

function myRound(x) {
  x = Number(x);

  if (isNaN(x)) return NaN;
  if (x === 0 || x === Infinity || x === -Infinity) return x;

  const frac = x % 1;
  const intPart = x - frac;

  if (x >= 0) {
    return frac >= 0.5 ? intPart + 1 : intPart;
  } else {
    return frac <= -0.5 ? intPart - 1 : intPart;
  };
};

console.log(myRound(5.4));
console.log(myRound(5.8));
console.log(myRound(-7.1));
console.log(myRound(-9.5));