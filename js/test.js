/* function Test(a) {
  console.log('SumMonth: ' + a);
}

Test(67); */

//Это тестовый код
/* if (!money || 0 === money.lenght) {
  alert(Введите сумму цифрами ');
}
 */

let mission = 120000;
let accumulatedMonth = '';
let money = +prompt('Ваш месячный доход?', 25000);
let addExpenses = prompt('Перечислете возможные расходы за рссчитываемый период в цифрах через запятую', 4500);

 function getExpensesMonth() {
  return addExpenses.split(',').reduce(function (a, b) {
        return (+a + (+b));
  });
} 

console.log(getExpensesMonth());


function getAccumulatedMonth() {
  accumulatedMonth = money - getExpensesMonth();
  return accumulatedMonth;
}

console.log(getAccumulatedMonth());

function getTargetMonth() {
  return mission / getAccumulatedMonth();
}

console.log('Цель будет достигнута за: ', getTargetMonth() + ' месяцев');


/* function name() {
  let av = addExpenses.split(',').reduce(function (a, b) {
      return (+a + (+b));
});
    return av;
    }
      console.log(name());

      let av = addExpenses.split(',');
     console.log('av: ', av); 
     let res = av.reduce(function (a, b) { 
       return a + b;
      });
      console.log(res); */