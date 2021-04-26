function main(num) {
    let sum = 0;
    let stringNum = num.toString();

    for(let digit of stringNum){
        sum += Number(digit);
    }

    console.log(sum);
}

main(245678);
main(97561);
main(543);