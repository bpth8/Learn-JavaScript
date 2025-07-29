let numberOne = Number(prompt('Введите первое число'))
let numberTwo = Number(prompt('Введите второе число'))

let resultNumberPlus = numberOne + numberTwo
let resultNumberMinus = numberOne - numberTwo
let resultNumberTimes = numberOne * numberTwo
let resultNumberSlash = numberOne / numberTwo

alert((`
  Сумма: ${resultNumberPlus} 
  Разность: ${resultNumberMinus} 
  Произведение: ${resultNumberTimes}
  Частное: ${resultNumberSlash}
`))
