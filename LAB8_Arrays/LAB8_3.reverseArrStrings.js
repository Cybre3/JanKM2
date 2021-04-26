function main(stringArr) {
    for(let i = 0; i < stringArr.length / 2; i++){
        let tempString = stringArr[i];
        stringArr[i] = stringArr[stringArr.length - 1 - i];
        stringArr[stringArr.length - 1 - i] = tempString;
    }

    console.log(stringArr.join(' '));
}

main(['a', 'b', 'c', 'd', 'e']);
main(['abc', 'def', 'hig', 'klm', 'nop']);
main(['33', '123', '0', 'dd']);