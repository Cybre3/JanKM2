function main(tankList, numCommands, commandList) {
    let tankListArr = tankList.split(', ');

    for (let command of commandList) {
        let [action, tankName_index, updateTankName] = command.split(', ');

        switch (action) {
            case 'Add':
                if (tankListArr.includes(tankName_index)) {
                    console.log(`Tank is already bought`);
                } else {
                    console.log(`Tank successfully bought`);
                    tankListArr.push(tankName_index);
                }
                break;
            case 'Remove':
                if (tankListArr.includes(tankName_index)) {
                    console.log(`Tank successfully sold`);
                    tankListArr.splice(tankListArr.indexOf(tankName_index), 1);
                } else {
                    console.log('Tank not found');
                }
                break;
            case 'Remove At':
                if (tankName_index > 0 && tankName_index < tankListArr.length) {
                    tankListArr.splice(tankName_index, 1);
                    console.log('Tank successfully sold');
                } else {
                    console.log('Index out of range');
                }
                break;
            case 'Insert':
                if (
                    tankListArr[tankName_index] &&
                    !tankListArr.includes(updateTankName)
                ) {
                    console.log(`Tank successfully bought`);
                    tankListArr.splice(tankName_index, 0, updateTankName);
                } else if (
                    tankListArr[tankName_index] &&
                    tankListArr.includes(updateTankName)
                ) {
                    console.log('Tank is already bought');
                } else if (
                    tankName_index < 0 ||
                    tankName_index >= tankListArr.length
                ) {
                    console.log('Index out of range');
                }
                break;
        }
    }
    console.log(tankListArr.join(', '));
}

// main('T-34-85 Rudy, SU-100Y, STG', 3, [
//     'Add, King Tiger(C)',
//     'Insert, 2, IS-2M',
//     'Remove, T-34-85 Rudy',
// ]);
main('T 34, T 34 B, T92, AMX 13 57', 4, [
    'Add, T 34',
    'Remove, AMX CDC',
    'Insert, 10, M60',
    'Remove At, 1',
    'Remove At, 7',
]);
