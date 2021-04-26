function main(numArr) {
    let condensedArr = [];
    let sum = 0;
    let i = 0;

    if (numArr.length === 1) {
        console.log(`${numArr[0]}`);
    } else {
        while (numArr.length > 1) {
            if (numArr[i + 1] !== undefined) {
                sum = Number(numArr[i]) + Number(numArr[i + 1]);
                condensedArr.push(sum);
                i++;
            } else {
                numArr = condensedArr;
                condensedArr = [];
                i = 0;
            }
        }

        console.log(numArr.join(''));
    }
}

main([2, 10, 3]);
main([5, 0, 4, 1, 2]);
main([1]);
