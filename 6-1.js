let arr = [42, 55, 10, null, 'string', true, 4, 8, 0, undefined, 7, 357, 25, 24];
let newArr = arr.filter(item => typeof item === 'number');
let odd = 0;
let even = 0;

function amountOddEvenNull() {
  for(let i = 0; i < newArr.length; i++) {
    if (newArr[i] === 0) {
        console.log('Число 0 есть в массиве')
    } else if (newArr[i] % 2 !== 0) {
        odd += 1
    } else {
        even +=1
    }
 }
console.log('Нечетных элементов: '+ odd);
console.log('Четных элементов: ' + even);
}

amountOddEvenNull();