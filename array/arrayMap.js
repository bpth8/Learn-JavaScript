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
const temperatur = [0, 15, 25, 30, -5];
