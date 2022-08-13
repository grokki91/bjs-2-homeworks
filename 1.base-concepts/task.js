"use strict";

function solveEquation(a, b, c) {
  let arr;
  let discriminant = b**2 - 4 * a * c;

  if (discriminant < 0) {
    arr = [];
  } else if (discriminant === 0) {
    arr = [-b / (2 * a)];
  } else if (discriminant > 0) {
    arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }

  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let credit;
  let mounths;
  let mounthPayment;
  let numYearMortgage = new Date(date).getFullYear();
  let numYearNow = new Date().getFullYear();

  if (!Number.isNaN(parseInt(percent))) {
    percent = +percent / 100 / 12;
  } else {
    return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
  }

  if (!Number.isNaN(parseInt(contribution))) {
    contribution = +contribution;
  } else {
    return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`;
  }

  if (!Number.isNaN(parseInt(amount))) {
    amount = +amount;
  } else {
    return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
  }

  credit = amount - contribution;
  
  if (typeof date === 'number') {
    mounths = date;
  } else {
    mounths = ((numYearMortgage - numYearNow) * 12);
  }
  
  mounthPayment = credit * (percent + (percent / (((1 + percent)**mounths) - 1)));
  totalAmount = mounthPayment * mounths;
  totalAmount = Number.parseFloat(totalAmount).toFixed(2);
  

  return totalAmount;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12))
console.log(calculateTotalMortgage(10, 1000, 50000, 12))
console.log(calculateTotalMortgage(10, 0, 20000, 24))
console.log(calculateTotalMortgage(10, 1000, 20000, 24))
console.log(calculateTotalMortgage(10, 20000, 20000, 24))
console.log(calculateTotalMortgage(10, 0, 10000, 36))
console.log(calculateTotalMortgage(15, 0, 10000, 36))