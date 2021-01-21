// factorial for iterative
function factorial(num) {
    let fact = 1;

    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}
let result1 = factorial(5);
console.log('Factorial Iterative: ', result1);


// factorial for recursive
function fact(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * fact(n - 1);
    }
}
var result2 = fact(5);
console.log('Factorial Recursive: ', result2);