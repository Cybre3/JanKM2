function main(string, commandList) {
    let alterStr = string;

    for (let command of commandList) {
        let [comm, act_str1_index, act_str2_index_lgth] = command.split(' ');

        switch (comm) {
            case 'Replace':
                while (alterStr.includes(act_str1_index)) {
                    alterStr = alterStr.replace(
                        act_str1_index,
                        act_str2_index_lgth
                    );
                }
                console.log(alterStr);
                break;

            case 'Cut':
                if (alterStr[act_str1_index] && alterStr[act_str2_index_lgth]) {
                    alterStr = alterStr.replace(
                        alterStr.substr(act_str1_index, act_str2_index_lgth),
                        ''
                    );
                    console.log(alterStr);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;

            case 'Make':
                alterStr =
                    act_str1_index === 'Upper'
                        ? alterStr.toUpperCase()
                        : alterStr.toLowerCase();
                console.log(alterStr);
                break;

            case 'Check':
                if (alterStr.includes(act_str1_index)) {
                    console.log(`Message contains ${act_str1_index}`);
                } else {
                    console.log(`Message doesn't contain ${act_str1_index}`);
                }
                break;

            case 'Sum':
                let sum = 0;
                if (alterStr[act_str1_index] && alterStr[act_str2_index_lgth]) {
                    let substr = alterStr.substr(
                        act_str1_index,
                        act_str2_index_lgth
                    );
                    for (let ch of substr) {
                        sum += Number(ch.charCodeAt());
                    }
                    console.log(sum);
                } else {
                    console.log(`Invalid indexes!`);
                }
                break;

            case 'Finish':
                break;
        }
    }
}

main(`ILikeSharan`, [
    `Replace a e`,
    `Make Upper`,
    `Check SHEREN`,
    `Sum 1 4`,
    `Cut 1 4`,
    `Finish`,
]);
main(`HappyNameDay`, [
    `Replace p r`,
    `Make Lower`,
    `Cut 2 23`,
    `Sum -2 2`,
    `Finish`,
]);
