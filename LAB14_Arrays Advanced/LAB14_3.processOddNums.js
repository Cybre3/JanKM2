function main(numsArr) {
    let oddIndexArr = numsArr
        .filter((value, index) => index % 2 !== 0)
        .map((item) => item * 2);

    console.log(oddIndexArr.reverse().join(' '));
}

main([10, 15, 20, 25]);
main([3, 0, 10, 4, 7, 3]);
