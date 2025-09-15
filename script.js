//1
function greet(name) {
  return `Привет, ${name}`
};
console.log(greet(prompt("Введите свое имя:", '')));

//2
function sum(a, b) {
  a = 5;
  b = 11;
  return a + b;
};
console.log(sum());

//3
function isEven(num) {
  return num % 2 === 0;
};

console.log(isEven(7));

//4
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber(1, 10));

//5
function nameFormat(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

console.log(nameFormat('Василий', 'Козлов'));

//6
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const numbers = [10, 20, 30, 40, 50];
console.log(findIndex(numbers, 20));

const fruits = ['banana', 'mango', 'black', 'mango'];
console.log(findIndex(fruits, 'mango'));

// nextlevel
// 1
function findInArray(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(findInArray(numbers, 40));
console.log(findInArray(numbers, 80));
console.log(findInArray(fruits, 'banana'));
console.log(findInArray(fruits, 'white'));

//2
function calculateTotal(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    total += item.price * item.quantity;
  }
  return total;
};

const shoppingCart = [
  { name: 'Виноград', price: 2.5, quantity: 4 },
  { name: 'Кокос', price: 0.65, quantity: 6 },
  { name: 'Киви', price: 3, quantity: 3 }
];

console.log(calculateTotal(shoppingCart));

//3
function findLongestWord(words) {
  if (words.length === 0) {
    return 0;
  };
  
  let maxLength = 0;
  
  for (let i = 0; i < words.length; i++) {
    const currentWordLength = words[i].length;
    if (currentWordLength > maxLength) {
      maxLength = currentWordLength;
    }
  }
  
  return maxLength;
};

const wordsArray1 = ['банан', 'киви', 'вишня', 'виноград'];
console.log(findLongestWord(wordsArray1));
const wordsArray2 = ['три', 'два', 'один'];
console.log(findLongestWord(wordsArray2));

//4
function sumAll(...numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

console.log(sumAll(1, 2, 3));
console.log(sumAll(5, 5, 5, 5));

//5
function validatePassword(password) {
  if (password.length <= 6) {
    return false;
  };

  let hasDigit = false;
  for (let i = 0; i < password.length; i++) {
    const char = password[i];
    if (!isNaN(parseInt(char))) {
      hasDigit = true;
      break;
    }
  };

  return hasDigit;
};

console.log(validatePassword("password123"));
console.log(validatePassword("password"));
console.log(validatePassword("123456"));

//6
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};

console.log(reverseString('JavaScript'));

//7
function getUniqueValues(arr) {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (uniqueArr.indexOf(value) === -1) {
      uniqueArr.push(value);
    }
  }
  return uniqueArr;
};

const numbersValues = [1, 2, 3, 2, 4, 1, 5];
console.log(getUniqueValues(numbersValues));
const mixedValues = ['a', 'b', 'c', 'a', 'd', 'b'];
console.log(getUniqueValues(mixedValues));

//8
function arrayToObject(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i][0];
    const value = arr[i][1];
    obj[key] = value;
  }
  return obj;
};

const pairs = [
  ['name', 'David'],
  ['age', 31],
  ['city', 'Moscow']
];

console.log(arrayToObject(pairs));

const anotherPairs = [
  [1, 'one'],
  [2, 'two']
];

console.log(arrayToObject(anotherPairs));

//9
function filterUsers(users, filters) {
  const result = [];
  
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    let isMatch = true;
    
    for (const key in filters) {
      if (user[key] !== filters[key]) {
        isMatch = false;
        break;
      }
    };
    
    if (isMatch) {
      result.push(user);
    }
  };
  
  return result;
};

const users = [
  { name: 'David', age: 31, city: 'Saratov' },
  { name: 'Ivan', age: 30, city: 'Omsk' },
  { name: 'Anastasiya', age: 30, city: 'Moscow' },
  { name: 'Leonid', age: 30, city: 'Moscow' },
  { name: 'Kate', age: 25, city: 'Moscow' }
];

const filters = { age: 30, city: 'Moscow' };
console.log(filterUsers(users, filters));

//10
function arrayDiff(arr1, arr2) {
  const diff = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (!arr2.includes(element)) {
      diff.push(element);
    }
  }
  return diff;
};

