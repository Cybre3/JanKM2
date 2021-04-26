function main(num1, num2, num3) {

    let maxNum = Math.max(num1, num2, num3);
    let minNum = Math.min(num1, num2, num3);
    let midNum = 0;

    if(num1 > minNum && num1 < maxNum) {
        midNum = num1;
    } else if(num2 > minNum && num2 < maxNum) {
        midNum = num2;
    } else if(num3 > minNum && num3 < maxNum) {
        midNum = num3;
    }
    

    console.log(maxNum);
    console.log(midNum);
    console.log(minNum);
}

main(2, 1, 3);
main(-2, 1, 3);
main(0, 0, 2);