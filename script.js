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

