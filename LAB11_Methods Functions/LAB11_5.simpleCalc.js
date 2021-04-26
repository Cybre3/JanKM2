function main(n1, n2, op) {
    console.log(calc(n1, n2, op));
}

function calc(num1, num2, op) {
    switch (op) {
        case 'add':
            return +num1 + +num2;
        case 'subtract':
            return num1 - num2;
        case 'divide':
            return num1 / num2;
        case 'multiply':
            return num1 * num2;
    }
}

main(5, 5, 'multiply');
