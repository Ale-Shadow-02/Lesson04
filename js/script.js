'use strict';

let mission = 120000;
let accumulatedMonth = '';
let money = +prompt('Ваш месячный доход?', 25000); //Обязательно должна быть проверка
let addExpenses = prompt('Перечислете возможные расходы за рссчитываемый период в цифрах через запятую', 4500); //Обязательно должна быть проверка
let deposit = confirm('Есть ли у вас депозит в банке?');

function getExpensesMonth() {
  return addExpenses.split(',').reduce(function (a, b) {
    return (+a + (+b));
  });
}

/* console.log(getExpensesMonth()); */


function getAccumulatedMonth() {
  accumulatedMonth = Math.floor(money - getExpensesMonth());
  return accumulatedMonth;
}

/* console.log(getAccumulatedMonth());  */

function getTargetMonth() {
  return Math.floor(mission / getAccumulatedMonth());
}

console.log('Цель будет достигнута за: ', getTargetMonth() + ' месяцев');



let showTypeOf = function (data) {
  return (data, typeof (data));
};

console.log(showTypeOf(money));
console.log(showTypeOf(addExpenses));
console.log(showTypeOf(deposit));

let getStatusIncome = function () {
  if (getAccumulatedMonth() >= 800) {
    return ('Высокий уровень дохода');
  } else if (getAccumulatedMonth() >= 300 && getAccumulatedMonth() < 800) {
    return ('Средний уровень дохода');
  } else if (getAccumulatedMonth() >= 0 && getAccumulatedMonth() < 300) {
    return ('Низкий уровень дохода');
  } else if (getAccumulatedMonth() < 0) {
    return ('Что то пошло не так');
  }
}; 

console.log(getStatusIncome());