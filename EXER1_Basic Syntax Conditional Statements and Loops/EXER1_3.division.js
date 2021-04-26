function main(num) {
    let diviser = '';

    if (num % 10 === 0) {
        diviser = 10;
    } else if (num % 7 === 0) {
        diviser = 7;
    } else if (num % 6 === 0) {
        diviser = 6;
    } else if (num % 3 === 0) {
        diviser = 3;
    } else if (num % 2 === 0) {
        diviser = 2;
    } else {
        diviser = false;
    }

    if (diviser === false) {
        console.log('Not divisible');
    } else {
        console.log(`The number is divisible by ${diviser}`);
    }
}

main(30);
main(15);
main(12);
main(1643);
