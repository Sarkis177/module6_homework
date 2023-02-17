function sum(x) {
    return function addition(y) {
        return x + y;
    };
}
let resultSum = sum(x = +prompt('Введите число x'));
console.log('Сумма чисел равна: ' + resultSum(x = +prompt('Введите число y')));
