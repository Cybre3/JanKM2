function main(numsArr) {
    let sortedArr = [];
    numsArr.sort((a, b) => a - b);

    for(let i = 0; numsArr.length > 0; i++) {
        sortedArr.push(numsArr.pop());
        sortedArr.push(numsArr.shift());
    }

    console.log(sortedArr.join(' '));
}

main([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);