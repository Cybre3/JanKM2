function main(n1, n2, n3) {
    let negativeCount = 0;

    negativeCount += negCount(n1, negativeCount);
    negativeCount += negCount(n2, negativeCount);
    negativeCount += negCount(n3, negativeCount);

    printStatus(negativeCount);
}

function negCount(num, count) {
    if (num < 0) {
        return count++;
    }
}

function printStatus(count) {

    if (count % 2 === 0) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

}

main(5, 12, -15);
main(-6, -12, 14);