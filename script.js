// 1. базовые преобразования
const string = ' Javascript is AWESOME ';
console.log(string.trim().toUpperCase());

// 2. извлечение подстрок
const dateEvent = '2024-07-30';

const yearEvent = dateEvent.slice(0, 4);
const monthEvent = dateEvent.slice(5, 7);
const dayEvent = dateEvent.slice(8, 10);

console.log(`Год: "${yearEvent}" / Месяц: "${monthEvent}" / День: "${dayEvent}"`);

// 3. поиск и замена
const searchAndReplace = 'Я люблю JavaScript! Я люблю это дело';
console.log(searchAndReplace.replace('JavaScript', 'программирование').replaceAll('люблю', 'обожаю'));

// 4. работа с разделителями
const fruitsList = 'яблоки, груши, виноград';
const result = fruitsList.split(',').map(fruit => fruit.toUpperCase()).join(' | ');
console.log(result);

// 5. проверка содержимого
const str = 'example@mail.com';
const isValidString1 = '@'.startsWith('@');
const isValidString2 = '.com'.endsWith('.com');
console.log(`${isValidString1} - ${isValidString2}`);

// 6. маскирование данных
const numberCard = '1234567812345678';
const maskedCard = `${numberCard.slice(0, 4)} **** **** ${numberCard.slice(-4)}`;
console.log(maskedCard);

// 7. анализ строки. я это задание не очень понял, предполагаю, 
// что здесь надо индексами играться, допустим
const codeLanguage = 'JavaScript';
console.log(`${codeLanguage.length}: ${codeLanguage[0]}, ${codeLanguage[codeLanguage.length -1]}, ${codeLanguage[4]}`);