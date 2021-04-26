let add = (a, b) => a + b;
let sub = (a, b) => a - b;

function main(num1, num2, num3) {
    console.log(sub(add(num1, num2), num3));
}

main(23, 6, 10);
main(1, 17, 30);
main(42, 58, 100);
