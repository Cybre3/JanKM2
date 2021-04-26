function main(numStrArr) {
    let numsArr = [];

    for(let i = 0; i < numStrArr.length; i++) {
        let currentEl = numStrArr[i];

        if (Number(currentEl) == currentEl) {
            numsArr.push(currentEl);
        } else if(i === 1 && Number(currentEl) != currentEl) {
            console.log(`Error: not enough operands!`);
            return;
        } else {
            let num2 = numsArr.pop();
            let num1 = numsArr.pop();
            if (num1 !== undefined && num2 !== undefined) {
                numsArr.push(operation(num1, num2, currentEl));
            }
        }
    }

    if (numsArr.length === 1) {
        console.log(numsArr.join(''));
    } else if (numsArr.length > 1) {
        console.log(`Error: too many operands!`);
    }
}

function operation(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

// main([3, 4, '+']);
// main([5, 3, 4, '*', '-']);
// main([7, 33, 8, '-']);
// main([15, '/']);
// main([31, 2, '+', 11, '/']);
// main([-1, 1, '+', 101, '*', 18, '+', 3, '/']);
// main([32, 76, 87, '/', 12, '-', '+', 65]);
main([2, '+', 1, 5, '-']);
