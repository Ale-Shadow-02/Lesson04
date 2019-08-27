'use strict';

let money = +prompt('Ваш месячный доход?', 25000); // 1)
let mission = 120000;

//Это тестовый код
/* if (!money || 0 === money.lenght) {
  alert('Перзагрузите страницу и Введите сумму цифрами ');
}
 */
let addExpenses = prompt('Перечислете возможные расходы за рссчитываемый период через запятую', 'KVP');
console.log('addExpenses: ', addExpenses.split(',')); // 2)

let deposit = confirm('Есть ли у вас депозит в банке?'); // 3)

let showTypeOf = function (data) {
  return( data, typeof(data));
};

console.log(showTypeOf(money));
console.log(showTypeOf(addExpenses));
console.log(showTypeOf(deposit));

// пока оставил потом удалю
/* console.log(typeof money);
console.log(typeof addExpenses);
console.log(typeof deposit); // 4) */

let expenseArr1 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'KVP');
/* let sum1 = prompt('Во сколько это обойдется?', 17000); */

function getExpensesMonth () {  // Возврат расходов
  let sum1 = prompt('Во сколько это обойдется?', 17000);
  return sum1;
   
 }
  /* getExpensesMonth(); */
/* console.log(getExpensesMonth()); */

/* let expenseArr2 = prompt('Какие обязательные ежемесячные расходы у вас есть?', 'KVP' );
 let sum2 = prompt('Во сколько это обойдется?', 15000); // 5)  */

function getAccumulatedMonth() {     // Возврат доходы - расходы
   return Math.floor( money - getExpensesMonth());
 }

let accumulatedMonth = getAccumulatedMonth();

console.log('Доход в месяц: ', accumulatedMonth); // 6)

function getTargetMonth() {     // За какое время достигается цель
  return mission / accumulatedMonth;
}
 
console.log(getTargetMonth());
/*  let budgetMonth = money - getExpensesMonth(); */




/* console.log(Math.ceil(mission / budgetMonth)); // 7) */

/* budgetMonth = money - sum2;
console.log(Math.floor(mission / budgetMonth)); */ // 8)

// Это тестовый код

/* let mission = 120000;
let budgetMonth = ''; */

 /*  console.log(Math.ceil(budgetMonth = mission / (money - sum1)));
  console.log('budgetMonth: ', budgetMonth);

  console.log(Math.floor(budgetMonth = mission / (money - sum2))); */

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
}; // 9)

console.log(getStatusIncome());

// 10) Проверено все работает
// 11) Добавлено с комитом в ветку мастер

