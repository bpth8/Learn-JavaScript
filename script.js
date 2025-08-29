//1.
const objStudent = {
  name: 'Давид',
  age: 16,
  grade: 4,
  schoolClass: 10,
}
console.log(`Студент ${objStudent.name} учится в ${objStudent.schoolClass} классе и ему ${objStudent.age} лет.`);

//2.
objStudent.grade = 5;
objStudent.hobby = 'Рисование';
console.log(`${objStudent.name} получил ${objStudent.grade} по предмету ${objStudent.hobby}.`);

//3.
const objCar = {
  brand: 'VW',
  model: 'Passat',
  year: 2020,
};

for (let key in objCar) {
  console.log(objCar[key]);
};

//4 
const objSettings = {
  theme: 'dark',
  volume: 80,
}

if (objSettings.theme, objSettings.volume) {
  console.log(`${objSettings.theme}`)
} else {
  console.log('Свойство не найдено!')
};

//5
const objMovies = [
  {title: 'Инception', director: 'Christopher Nolan', year: 2010},
  {title: 'The Matrix', director: 'Lana Wachowski', year: 1999},
  {title: 'Interstellar', director: 'Christopher Nolan', year: 2014}
];

for (let i = 0; i < objMovies.length; i++) {
  if (objMovies[i].year < 2005) {
    console.log(objMovies[i]);
  }
};

//6
let count = 0;

for (let b = 0; b < objMovies.length; b++) {
  if (objMovies[b].director === 'Christopher Nolan') {
    count++;
  }
}

console.log("Кол-во фильмов Кристофера Нолана:", count);

//level medium
//1
const objCart = [
  { name: 'Книга', price: 15, quantity: 2 },
  { name: 'Кофе', price: 25, quantity: 1 },
  { name: 'Фонарик', price: 10, quantity: 3 }
];

let total = 0;

for (let b = 0; b < objCart.length; b++) {
  total += objCart[b].price * objCart[b].quantity;
}

console.log("Общая сумма корзины: " + total);

//2
const users = [
  { id: 1, name: 'Alice', isOnline: true },
  { id: 2, name: 'Bob', isOnline: false },
  { id: 3, name: 'Charlie', isOnline: true }
];

for (const user of users) {
  if (user.isOnline === true) {
    console.log('(Найди и выведи первого пользователя)', user);
    break;
  }
};

//3
const objAnimals = [
  {name: 'Кот', type: 'домашнее'}, 
  {name: 'Медведь', type: 'дикое'}, 
  {name: 'Собака', type: 'домашнее'}, 
  {name: 'Лиса', type: 'дикое'}
];

const domestic = [];
const wild = [];

for (const animal of objAnimals) {
  if (animal.type === 'домашнее') {
    domestic.push(animal);
  } else {
    wild.push(animal);
  }
};

console.log('домашнее животные: ', domestic, "дикие животные: ", wild);

//4
const objPlayers = [
  {name: 'Анна', score: 85},
  {name: 'Борис', score: 95},
  {name: 'Вика', score: 76}];

let minScore = objPlayers[0].score;
let minPlayer = objPlayers[0];

for (let i = 1; i < objPlayers.length; i++) {
  if (objPlayers[i].score < minScore) {
    minScore = objPlayers[i].score;
    minPlayer = objPlayers[i];
  }
}

console.log(`Игрок с наименьшим счётом: ${minPlayer.name}, счёт: ${minPlayer.score}`);

//5
const newProducts = [
  {id: 4, name: 'Чашка'},
  {id: 5, name: 'Блюдце'}]; 
  
const oldProducts = [ 
  {id: 1, name: 'Ложка'},
  {id: 2, name: 'Вилка'}]; 
  
const objCombined = [...newProducts, ...oldProducts]; 
console.log(objCombined);
// глубоко ключи objCombined не видит и присваивается андефайнд
// можно найти с помощью мап
const names = objCombined.map(item => item.name);
console.log(names);
