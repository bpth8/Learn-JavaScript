//1
export { newNum };

const numMassive = [1, 2, 3, 4, 5];
const newNum = numMassive.map((a) => a *2);

//2
export { fruitLenght };

const fruits = ["apple", "banana", "cherry"];
const fruitLenght = fruits.map((fruits) => fruits.length);

//3
export {keysName};

const objMassive = [
  {name: "John", age: 25},
  {name: "Anna", age: 30}
];

const keysName = objMassive.map((item) => item.name);

//4
export { fahrenheit };

const temperatures = [0, 15, 25, 30, -5];
const fahrenheit = temperatures.map((item) => item *9/5 +32);

//5 условие задачи вообще не понял. 

//6
export { capitalizedString };

const stringArray = ["hello", "world", "javascript"];
const capitalizedString = stringArray.map((item) => item.charAt(0).toUpperCase() + item.slice(1));

//7
export { updatedNumbers };

const numberArray = [1, 2, 3, 4, 5];
const updatedNumbers = numberArray.map((num) => { return num % 2 === 0 ? num * 2 : num });

//8
export { stringToNumberConversion };

const arrayNumbers = [1, "2", 3, "4", 5];
const stringToNumberConversion = arrayNumbers.map((num) => Number(num));

//9
export { discountedProducts };

const products = [
  {name: "apple", price: 1.2}, 
  {name: "banana", price: 0.8}
];

const discountedProducts = products.map(product => 
  ({...product, discountedPrice: + (product.price * 0.9).toFixed(2)})
);
