// 1. найти сумму всех элементов массива
//a. без метода
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
};
console.log(`Общая сумма массива без метода: ${sum}.`);

// b. с методом reduce
let numbers = [1, 2, 3, 4, 5];
let result = numbers.reduce((sum, current) => sum + current, 0);
console.log(`Общая сумма массива с методом: ${result}.`);

//  2. Найти максимальный элемент в массиве
// a.
let numbers = [3, 7, 2, 9, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i]
  }
}
console.log(max);

//b.
let numbers = [3, 7, 2, 9, 5];
let max = Math.max(...numbers);
console.log(max);

// 3. Проверить, есть ли элемент в массиве

// a. 

let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';
let found = false;

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === search) {
    found = true;
    break;
  }
}

if (found) {
  console.log('Найден элемент');
} else {
  console.log('Элемент не найден');
}

//b. 
let fruits = ['apple', 'banana', 'orange'];
let search = 'banana';

if (fruits.includes(search)) {
  console.log('Найден элемент');
} else {
  console.log('Элемент не найден');
}

// 4. Перевернуть массив
// a
let arr = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr.length -1; i >= 0; i--) {
  reversed.push(arr[i]);
}
console.log(`Перевернутый массив: ${reversed}, оригинальный массив ${arr} был сохранен.`);

// b
let arr = [1, 2, 3, 4, 5];
let reversed = [...arr].reverse();
console.log(`Перевернутый массив: ${reversed}, оригинальный массив ${arr} был сохранен.`);

// 1. level medium
let numbers = [1, 2, 3, 2, 4, 2, 5];

// a.
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 2) {
    sum++;
  }
}

console.log(sum);

// b.
let count = numbers.filter(num => num === 2).length;
console.log(count);

// 2. a.

