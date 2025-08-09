// 1. проверка возраста
const userAge = prompt("Проверка возраста:", '');

if (userAge < 18) {
  alert('Доступ запрещен')
} else {
  alert('Доступ разрешен')
};

// 2. чётное или нечётное
let number = prompt("Введите число", '');
let result = (number % 2 === 0) ? "Чётное" : "Нечётное";
console.log(result);

// 3. калькулятор
const userNumber1 = prompt('Введите число:', '');
const userNumber2 = prompt('Введите число:', '');
const userOperator = prompt('Введите оператор (+, -, *, /): ');
let resultNumber;

switch (userOperator) {
  case '+':
    resultNumber = userNumber1 + userNumber2;
    break;
  case '-':
    resultNumber = userNumber1 - userNumber2;
    break;
  case '*':
    resultNumber = userNumber1 * userNumber2;
    break;
  case '/':
    resultNumber = userNumber1 / userNumber2;
    break;
  default:
    resultNumber = 'Неверно указан оператор!'
};

alert(`${userNumber1} ${userOperator} ${userNumber2} = ${resultNumber}`);

// 4. тест длины строк
const inputStr = prompt("Введите строку:");
const resultStr = inputStr.length > 10 ? inputStr.slice(0, 5) + "*".repeat(inputStr.length - 5) : inputStr.toUpperCase();
console.log(resultStr);

// 5. определение времени суток
let currentHour = prompt("Какой текущий час (Введите число от 0 до 23)", '', 23);

if (currentHour < 5) {
  alert('Сейчас ночь')
} else if (currentHour < 12) {
  alert('Сейчас утро')
} else if (currentHour < 18) {
  alert('Сейчас день')
} else if (currentHour < 23) {
  alert('Сейчас вечер')
} else {
  alert('Неверное число!')
};

// 6. тест е-мэйл
const userMail = prompt("Введите свой e-mail", '');
const wordMail = "@";
alert(`${userMail.includes(wordMail)}`);

// 7. палиндром
const userWordPalindrome = prompt("Введите слово:", '');
const reversePalindrome = userWordPalindrome.split('').reverse().join('');
const resultPalindrome = userWordPalindrome === reversePalindrome;
console.log(resultPalindrome);