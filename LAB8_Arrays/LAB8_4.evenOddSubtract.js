function main(numArr) {
    let evenSum = 0;
    let oddSum = 0;
    
    for(let i = 0; i < numArr.length; i++){
        if(numArr[i] % 2 === 0){
            evenSum += numArr[i];
        } else {
            oddSum += numArr[i];
        }
    }

    console.log(evenSum - oddSum);
}

main([1, 2, 3, 4, 5, 6]);
