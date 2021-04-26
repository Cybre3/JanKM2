function main(n) {
    let sum = 0;
    let startNum = 1;
    
    for(let i = 0; i < n; i++) {
        console.log(startNum);        
        sum += startNum;
        startNum += 2;
    }

    console.log(`Sum: ${sum}`);


}

main(5);
main(3);