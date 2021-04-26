let digitsArr = (newNum) => {
    let digits = [];
    newNum = newNum.toString();

    for (let num of newNum) {
        digits.push(Number(num));
    }

    return digits;
};

let sumDigits = (digits) => {
    let sum = 0;

    for (let num of digits) {
        sum += num;
    }

    return sum;
};

function main(number) {
    let newNum = number;
    let digits = digitsArr(newNum);
    let sum = sumDigits(digits);

    let average = Number((sum / digits.length).toFixed(2));
    while (average <= 5) {
        sum += 9;
        digits.push(9);
        average = Number((sum / digits.length).toFixed(2));
    }

    console.log(digits.join(''));
}

// main(101);
main(5835);
