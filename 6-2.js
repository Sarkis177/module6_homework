function numberType(x) {
  if (x === 0 || x === 1) {
     console.log(`Число ${x} - не простое и не составное`);
  }
  for (let i = 2; i <= x; i++) {
     if (x > 1000) {
        console.log('Данные неверны');
        break;
     } else if (x % i === 0 && x !== i) {
        console.log(`Число ${x} - составное`);
        break;
     } else if (x === i) {
        console.log(`Число ${x} - простое`);
     }
  }
}
numberType(177); 