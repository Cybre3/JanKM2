function main(num) {

    let prime = true;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            prime = false;
        }
    }

    console.log(prime);
}

main(7);
main(8);
main(81);