function main(numBisc, workerCount, compFactory) {

    let totalBisc = 0;
    let percentage = 0;

    for(let day = 0; day <= 30; day++) {
        totalBisc += day % 3 === 0 ? Math.floor(numBisc * workerCount * 0.75) : numBisc * workerCount; 
    }
    
    console.log(`You have produced ${totalBisc} biscuits for the past month.`);

    console.log(`You produced ${Math.abs(totalBisc / compFactory * 100)} percent`, totalBisc > compFactory ? `more biscuits` : `less biscuits`);
    
}

main(78, 8, 16000);