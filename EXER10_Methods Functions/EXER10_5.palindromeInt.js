function main(numArr) {
    for(let num of numArr) {
        if(reverseNum(num) === num){
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

function reverseNum(num) {
    let reverseNumArr = [];
    num = num.toString();

    for(let digit of num) {
        reverseNumArr.push(digit);
    }
    return Number(reverseNumArr.reverse().join(''));
}

main([123, 323, 421, 121]);
