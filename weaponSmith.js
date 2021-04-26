function weaponSmith(stringArr) {
    let nameParts = stringArr.shift().split('|');
    

    for (let i = 0; i < stringArr.length; i++) {
        let [done, expression, numMoves] = stringArr[i].split(' ');
        numMoves = Number(numMoves);

        // console.log(done, expression, numMoves);
        switch (expression) {
            case 'Left':
                // check if move is possible
                if (nameParts[numMoves - 1]) {
                    const tmp = nameParts[numMoves - 1];
                    nameParts[numMoves - 1] = nameParts[numMoves];
                    nameParts[numMoves] = tmp;
                }
                break;
            case 'Right':
                if (nameParts[numMoves + 1]) {
                    const tmp = nameParts[numMoves + 1];
                    nameParts[numMoves + 1] = nameParts[numMoves];
                    nameParts[numMoves] = tmp;
                }
                break;
            case 'Odd':
                let oddElArr = [];
                for (let index in nameParts) {
                    if (index % 2 !== 0) {
                        oddElArr.push(nameParts[index]);
                    }
                }
                console.log(oddElArr.join(' '));
                break;
            case 'Even':
                let evenElArr = [];
                for (let index in nameParts) {
                    if (index % 2 === 0) {
                        evenElArr.push(nameParts[index]);
                    }
                }
                console.log(evenElArr.join(' '));
                break;
            default:
                break;
        }
    }

    console.log(`You crafted ${nameParts.join('')}!`);
}

weaponSmith([
    'ha|Do|mm|om|er',
    'Move Right 0',
    'Move Left 3',
    'Check Odd',
    'Move Left 2',
    'Move Left 10',
    'Move Left 0',
    'Done',
]);
weaponSmith([
    'ri|As|er|hb|ng',
    'Move Left 1',
    'Move Right 2',
    'Move Right 3',
    'Move Left 2',
    'Done',
]);
