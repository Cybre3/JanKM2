const currentHang = (row, stringArr) => stringArr[row];
const topHangar = (row, stringArr) => stringArr[row - 1];
const btmHangar = (row, stringArr) => stringArr[+row + 1];
const topCell = (col) => col;
const btmCell = (col) => col;
const leftCell = (col) => col - 1;
const rightCell = (col) => +col + 1;

function main(stringArr) {
    let coords = stringArr.pop().split(' ');
    stringArr = stringArr.map((row) =>
        row.split(' ').map((num) => Number(num))
    );
    let snowBallDmg = 0;
    let killedBuns = 0;
    const hangars = [currentHang, topHangar, btmHangar];
    const cells = [topCell, btmCell, leftCell, rightCell];

    coords.forEach((coord) => {
        let [hangar, cell] = coord.split(',');
        const bombBunny = stringArr[hangar][cell];

        hangars.forEach((thisHangar) => {
            cells.forEach((thisCell, cellIndex) => {
                let currentBunny = '';

                if (thisHangar.name === 'currentHang' && cellIndex > 1) {
                    currentBunny = thisHangar(hangar, stringArr)[thisCell(cell)];

                } else if (topHangar(hangar, stringArr) && thisHangar.name === 'topHangar' && thisCell.name !== 'topCell') {
                    currentBunny = thisHangar(hangar, stringArr)[thisCell(cell)];
                    
                } else if (btmHangar(hangar, stringArr) && thisHangar.name === 'btmHangar' && thisCell.name !== 'btmCell') {
                    currentBunny = thisHangar(hangar, stringArr)[thisCell(cell)];
                }

                if (currentBunny) {
                    thisHangar(hangar, stringArr).splice(
                        thisCell(cell),
                        1,
                        (currentBunny -= bombBunny)
                    );
                }
            });
        });
    });

    for (let hangar of stringArr) {
        for (let cell of hangar) {
            if (+cell > 0) {
                killedBuns++;
                snowBallDmg += +cell;
            }
        }
    }
    console.log(`${snowBallDmg}\n${killedBuns}`);
}

main(['5 10 15 20', '10 10 10 10', '10 15 10 10', '10 10 10 10', '2,2 0,1']);
main(['10 10 10', '10 10 10', '10 10 10', '0,0']);
