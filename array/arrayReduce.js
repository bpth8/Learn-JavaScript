//1
export { resultNumbers };

const numbers = [1, 2, 3, 4, 5];
const resultNumbers = numbers.reduce((acc, cur) => acc + cur, 0);

//2
export { resultNumber };

const resultNumber = numbers.reduce((acc, cur) => acc * cur, 1);

//3
export { resultStr };

const str = ["a", "b", "c", "d"];
const resultStr = str.reduce((acc, cur) => acc + cur);

//4 reduce + if else ?

//5
export { result };

const arrDouble = [1, 2, 3, 2, 4, 3, 5];
const unique = arrDouble.reduce((acc, item) => acc.add(item), new Set());
const result = [...unique];

//6
export { arrReduce };

const arr = [[1,2], [3,4], [5,6]];
const arrReduce = arr.reduce((acc, cur) => [...acc, ...cur], []);