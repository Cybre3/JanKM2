function main(gothamMap, stringArr) {
    let pollutedAreas = [];
    gothamMap = gothamMap.map((block) =>
        block.split(' ').map((num) => Number(num))
    );
    let pmV = ['breeze', 15, 'gale', 20, 'smog'];
    let pmValue = 0;

    for (let forces of stringArr) {
        const [force, index_value] = forces.split(' ');
        gothamMap = forceChange(gothamMap, force, index_value, pmV);   
    }

    for (let block in gothamMap) {
        for (let house in gothamMap[block]) {
            if (gothamMap[block][house] >= 50) {
                pollutedAreas.push(`[${block}-${house}]`);
            }
        }
    }

    if (pollutedAreas.length === 0) {
        console.log(`No polluted areas`);
    } else {
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`);
    }
}

function forceChange(map, force, index_value, pmvArr) {
    switch (force) {
        case 'breeze':
            let row = map[index_value].map((num) => (num -= pmvArr[pmvArr.indexOf(force) + 1]));
            map.splice(index_value, 1, row);
            return map;
        case 'gale':
            map.forEach((block) => {
                block.splice(index_value, 1, (block[index_value] -= pmvArr[pmvArr.indexOf(force) + 1]));
            });
            return map;
        case 'smog':
            return map.map((block) => block.map((num) => num += +index_value));
    }
}

main(
    [
        '5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24',
    ],
    ['breeze 1', 'gale 2', 'smog 25']
);
main(
    [
        '5 7 3 28 32',
        '41 12 49 30 33',
        '3 16 20 42 12',
        '2 20 10 39 14',
        '7 34 4 27 24',
    ],
    ['smog 11', 'gale 3', 'breeze 1', 'smog 2']
);
main(
    [
        '5 7 2 14 4',
        '21 14 2 5 3',
        '3 16 7 42 12',
        '2 20 8 39 14',
        '7 34 1 10 24',
    ],
    ['breeze 1', 'gale 2', 'smog 35']
);
