//1
const calculate = (a, b, operation) => {
  return operation(a, b);
};

const sumSubtract = (x, y) => {
  return x - y;
};

const sumDivide = (x, y) => {
  return x / y;
};

const sumAdd = (x, y) => {
  return x + y;
};

console.log(calculate(10, 6, sumSubtract));
console.log(calculate(10, 5, sumDivide));
console.log(calculate(12, 5, sumAdd));

//2
const squareArray = (arr, callback) => {
  return arr.map(callback);
}

const square = (num) => {
  return num * num;
};

const numbers = [1, 2, 3, 4, 5];
const squared = squareArray(numbers, square);
console.log(squared);

//3
const filterArray = (arr, callback) => {
  return arr.filter(callback);
};

const isEven = (num) => {
  return num % 2 == 0;
};

const numbersMassive = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbersMassive, isEven);
console.log(evenNumbers);

//4
const formatText = (text, formatter) => {
  return formatter(text);
};

const toUpper = (str) => str.toUpperCase();
const toLower = (str) => str.toLowerCase();

console.log(formatText("JavaScript!", toUpper));
console.log(formatText("JavaScript!", toLower));

//5
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  };
};

const numberMassive = [5, 10, 20];
myForEach(numberMassive, function(element, index, array) {
  console.log(`Элемент: ${element}, Индекс: ${index}, Массив: [${array}]`);
});
