function main(numArr) {
    let bigNumArr = [];
    let status = '';
    for(let i = 0; i < numArr.length; i++){
        for(let j = i + 1; j < numArr.length; j++){
            if(numArr[i] > numArr[j]){
                status = 'yes';
            } else {
                status = 'no';
                break;
            }
        }
        if(status === 'yes' || i === numArr.length - 1){
            bigNumArr.push(numArr[i]);
        }
    }

    console.log(bigNumArr.join(' '));
}

main([1, 4, 3, 2]);
main([14, 24, 3, 19, 15, 17]);
main([41, 41, 34, 20]);
main([27, 19, 42, 2, 13, 45, 48]);
