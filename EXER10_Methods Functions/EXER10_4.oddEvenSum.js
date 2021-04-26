function main(num){
    let oddSum = 0;
    let evenSum = 0;
    oddOrEven(num, oddSum, evenSum);
}

function oddOrEven(numbers, oddSum, evenSum){
    numbers = numbers.toString();
    
    for(let num of numbers) {
        if(num % 2 === 0) {
            evenSum += Number(num);
        } else {
            oddSum += Number(num);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

main(1000435);