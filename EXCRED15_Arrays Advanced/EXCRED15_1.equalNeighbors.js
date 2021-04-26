function main(ArrOfArr) {
    let count = 0;

    for (let i in ArrOfArr) {
        let pair1 = ArrOfArr[+i];
        let pair2 = ArrOfArr[+i + 1];

        for (let i in pair1) {
            if (pair2 && pair1[i] === pair2[i]) {
                count++;
            }
        }
    }
    console.log(count);
}
main([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4'],
]);
main([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5'],
]);
