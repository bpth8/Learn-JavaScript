// усложненное задание
let randNum = Math.floor(Math.random() * 100) + 1;
let userNum;
let attempts = 0;

while (userNum !== randNum) {
  userNum = Number(prompt("Введите число", ''));
  attempts++;

  if (userNum < randNum) {
    alert('Больше!');
  } else if (userNum > randNum) {
    alert('Меньше!');
  } else {
    alert(`Поздравляю, угадал! Количество попыток: ${attempts}`);
  }
};

//  1. Вывод чисел от 1 до N
const maxNum = Number(prompt('Введите число',''));
let userNum2 = 1;

while (userNum2 <= maxNum) {
  console.log(userNum2);
  userNum2++;
};

// 2. Сумма чисел от 1 до N
const userPoint = Number(prompt("Введите число:", ''));
let resultSum = 0;

for (let i = 1; i <= userPoint; i++) {
  resultSum += i;
}

console.log("Сумма введенного " + userPoint + ", будет " + resultSum);

// 3. Четные числа
for (let evNum = 1; evNum <= 100; evNum++) {
  if (evNum % 2 === 0) {
    console.log(evNum);
  }
};

// 4. До первого четного числа
let userNumId;

do {
  userNumId = Number(prompt("Введите число!"));
} while (userNumId % 2 !== 0);

console.log("Чётное число -", userNumId);

// 5. Среднее арифметическое
let numbersUser1 = [];
while (true) {
  let input = prompt("Введите число или 'стоп' для окончания:");
  if (input.toLowerCase() === "стоп") break;
  let num = Number(input);
  if (!isNaN(num)) {
    numbersUser1.push(num);
  }
}
if (numbersUser1.length > 0) {
  let sum = 0;
  for (let n of numbersUser1) {
    sum += n;
  }
  let average = sum / numbersUser1.length;
  console.log("Среднее арифметическое:", average);
} else {
  console.log("Числа не были введены");
};

// 6. Максимальное число
let numbersUser2 = [];
while (true) {
  let input = prompt("Введите число или 'стоп' для окончания:");
  if (input.toLowerCase() === "стоп") break;
  let num = Number(input);
  if (!isNaN(num)) {
    numbersUser2.push(num);
  }
}
if (numbersUser2.length > 0) {
  let max = numbersUser2[0];
  for (let n of numbersUser2) {
    if (n > max) max = n;
  }
  console.log("Максимальное число:", max);
} else {
  console.log("Числа не были введены");
}

// Работа со строками:

// 7. перевернутая строка (реверс)
let useStr2 = prompt("Введите строку:");
let reversed = "";

for (let i = useStr2.length - 1; i >= 0; i--) {
  reversed += useStr2[i];
}

console.log("Перевернутая строка:", reversed);

// 8. подсчет глассных
let useStr = prompt("Введите строку:");
let vowels = ["а", "е", "и", "о", "у", "я", "э", "ю"];
let count = 0;

for (let i = 0; i < useStr.length; i++) {
  let abcd = useStr[i].toLowerCase();
  if (vowels.includes(abcd)) {
    count++;
  }
}

console.log("Количество гласных:", count);

// 9. замена символов
let str = prompt("Введите строку:");
let result = "";

for (let i = 0; i < str.length; i++) {
  let ch = str[i];
  if (ch === 'a' || ch === 'A') {
    result += "!";
  } else {
    result += ch;
  }
}

console.log("Результат:", result);



