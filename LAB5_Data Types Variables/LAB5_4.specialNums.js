function main(n) {

    
    for(let i = 1; i <= n; i++) {
        let specialStat = 'False';
        let sum = 0;
        i = i.toString();

        for(let digit of i){
            sum += Number(digit);
        }

        if(sum === 5 || sum === 7 || sum === 11) {
            specialStat = 'True';
        }
        
        console.log(`${i} -> ${specialStat}`);
    }
}

main(15);