function main(numsArr) {
    numsArr.sort((a, b) => a - b); // sorts array ascendingly
    console.log(numsArr[0], numsArr[1]); // prints the first two numbers of the sorted array
}

main([30, 15, 50, 5]);
main([3, 0, 10, 4, 7, 3]);
