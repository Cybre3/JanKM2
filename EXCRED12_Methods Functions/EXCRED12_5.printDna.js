let chain = (basePair, symbolA, symbolB) => {
    switch (basePair) {
        case 1:
            return `**${symbolA}${symbolB}**`;
        case 2:
        case 4:
            return `*${symbolA}--${symbolB}*`;
        case 3:
            return `${symbolA}----${symbolB}`;
    }
};

function main(helixLength) {
    let sequence = 'ATCGTTAGGG'.split('');
    let basePair = 1;
    let seqIndex = 0;

    for (let i = 0; i < helixLength; i++) {

        if (basePair === 5) {
            basePair = 1;
        }

        let symbolA = sequence.slice(seqIndex, seqIndex + 1);

        if (symbolA.length === 0) {
            seqIndex = 0;
            symbolA = sequence[seqIndex];
        }

        let symbolB = sequence.slice(seqIndex + 1, seqIndex + 2);

        console.log(chain(basePair, symbolA, symbolB));
        basePair++;
        seqIndex += 2;
    }
}

main(4);
main(10);