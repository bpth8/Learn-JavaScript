//1
const addToCart = (cart, item) => {
	return [...cart, item];
};

const cart = ['apple', 'banana'];
const newCart = addToCart(cart, 'orange');
console.log(newCart);

//2
