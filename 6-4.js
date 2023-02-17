function counter(x, y) {
    let initialDigit = x;
    const counterInterval = setInterval(function() {
        console.log(initialDigit);
        if (initialDigit === y) clearInterval(counterInterval);
        ++initialDigit;
    }, 1000)
}
counter(5, 15);