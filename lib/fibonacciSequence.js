function fibonacciSequence(count) {
    if (count === 0) {
      return [];
    };

    var fib = [0,1];

    for (i = 0; i <= (count-2); i++){
        fib.push(fib[i] + fib[i+1]);
    };

    fib = fib.slice(1);
    return fib;
};

module.exports = fibonacciSequence;
// so that the test module knows which function to export