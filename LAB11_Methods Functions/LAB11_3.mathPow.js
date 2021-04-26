function main(base, pow) {
    console.log(powerTo(base, pow));
}

function powerTo(baseNum, powerTo) {
    let result = 1;

    for(let i = 0; i < powerTo; i++) {
        result *= baseNum;
    }

    return result;
}
main(2, 8);