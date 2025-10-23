//1
export { filterNumbers };

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterNumbers = numbers.filter((num) => num % 2 === 0);

//2
export { filterFruits };

const fruits = ["apple", "banana", "cherry", "date"];
const filterFruits = fruits.filter((item) => item.length > 5);

//3
export { filterObjUser };

const objUser = [
  {name: "John", age: 25}, 
  {name: "Anna", age: 17}, 
  {name: "Mike", age: 30}
];

const filterObjUser = objUser.filter((item) => item.age >= 18);

//4
export { filterArrayNumbers };

const arrayNumbers = [-1, 2, -3, 4, -5, 6];
const filterArrayNumbers = arrayNumbers.filter((num) => num > 0);

//5
export { filterArrayFruits };

const arrayFruits = ["apple", "banana", "avocado", "cherry", "apricot"];
const filterArrayFruits = arrayFruits.filter(item => item.startsWith('a'));

//6
export { filterArrayCatalog };

const arrayCatalog = [{name: "book", price: 15}, {name: "pen", price: 5}];
const filterArrayCatalog = arrayCatalog.filter((item) => item.price > 10);

//7
export { filterArrayData };

const arrayData = ["23.10.2025", "08.08.2008", "11.09.2001", "11.11.2026"];
const filterArrayData = arrayData.filter(dateStr => {
  const [day, month, year] = dateStr.split('.');
  const date = new Date(year, month - 1, day);
  const now = new Date();
  return date > now;
});

//8
export { uniqueNumbers };

const number = [1, 2, 3, 3, 4, 1, 5, 6];
const uniqueNumbers = number.filter((num, index, arr) => arr.indexOf(num) === index);
