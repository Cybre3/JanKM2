function main(numArr) {
    originalSum = 0;
    modifiedSum = 0;

    for (let index in numArr) {
        index = Number(index);
        originalSum += numArr[index];

        if (numArr[index] % 2 === 0) {
            numArr[index] += index;
        } else {
            numArr[index] -= index;
        }

        modifiedSum += numArr[index];
    }

    console.log(numArr);
    console.log(originalSum);
    console.log(modifiedSum);
}

main([5, 15, 23, 56, 35]);
