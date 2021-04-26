function main(binary) {
    let sum = 0;

    for (let i = 0; i < binary.length; i++) {
        let digit = binary[binary.length - 1 - i];
        sum += digit * 2 ** i;
    }

    console.log(sum);
}

main('00001001');
main('11110000');