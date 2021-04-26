function main(num) {

    let englishWord = '';
    let digit = num % 10;

    switch(digit) {
        case 1: englishWord = 'one'; break;
        case 2: englishWord = 'two'; break;
        case 3: englishWord = 'three'; break;
        case 4: englishWord = 'four'; break;
        case 5: englishWord = 'five'; break;
        case 6: englishWord = 'six'; break;
        case 7: englishWord = 'seven'; break;
        case 8: englishWord = 'eight'; break;
        case 9: englishWord = 'nine'; break;
        default: englishWord = 'Error!';
    }

    console.log(englishWord);
}

main(512);
main(1);
main(1643);