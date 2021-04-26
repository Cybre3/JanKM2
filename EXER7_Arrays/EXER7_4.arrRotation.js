function main(numArr, numRotations) {
    for (let i = 0; i < numRotations; i++) {
        let currentNum = numArr.shift();
        numArr.push(currentNum);
    }

    console.log(numArr.join(' '));
}

main([51, 47, 32, 61, 21], 2);
main([32, 21, 61, 1], 4);
main([2, 4, 15, 31], 5);
