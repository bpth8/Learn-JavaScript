//1.
let objCar = {
	brand: 'Toyota',
	model: 'Camry',
	year: '2021'
};

console.log(Object.keys(objCar));

//2.
let fruitPrice = {
	apple: 50,
	banana: 30,
	orange: 70
};

function sumTotal(fruitPrice) {
let sum = 0;
	for (let fruits of Object.values(fruitPrice)) {
		sum += fruits;
	};

	return sum;
};

console.log(sumTotal(fruitPrice));

//3
let objBook = {
	title: 'JavaScript Basics',
	author: 'Jane Doe',
	pages: 200
};

console.log(Object.entries(objBook));

//4
const objBrand = {
	brand: 'Adidas',
	color: 'black and white',
	devise: 'Impossible is Nothing',
	country: 'Germany'
}

const countProperties = (objBrand) => {
	return Object.keys(objBrand).length;
};

console.log(countProperties(objBrand));

//5
let scores = {
	Alex: 100,
	Bob: 75,
	Charlie: 95
};

let values = Object.values(scores);
let max = Math.max(...values);
console.log("максимальное значение:", max);

//6
const objAuto = {
	Brand: "Volkswagen",
	Year: 2020,
	Model: 'Touareg',
	engineDisplacement: 3000,
	Color: 'Black',
	Fuel: 'Diesel',
	Weight: 3200
};

function sumNumValues(objAuto) {
	const values = Object.values(objAuto);
	let sum = 0;

	for (let value of values) {
		if (typeof value === 'number') {
			sum += value;
		}
	}

	return sum;
};

console.log(sumNumValues(objAuto));

//Сравнение двух объектов
//тут какой нибудь obj1 и obj2..

function areObjectsEqual(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  };

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  };

  return true;
};


