function main(numArr) {
    let bigNumArr = [];
    biggerNum = 0;
    for (let i = 0; i < numArr.length; i++) {
        if(numArr[i] > biggerNum){
            biggerNum = numArr[i];
            bigNumArr.push(biggerNum);
        }
    }

    console.log(bigNumArr.join(' '));
}

main([1, 3, 8, 4, 10, 12, 3, 2, 24]);
main([1, 2, 3, 4]);
main([20, 3, 2, 15, 6, 1]);
