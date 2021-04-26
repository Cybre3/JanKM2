function main(userFriendList, commandList) {
    let blNameCount = 0;
    let lostNameCount = 0;
    let friendListArr = userFriendList.split(', ');

    for (let command of commandList) {
        let [action, name_index, updateName] = command.split(' ');

        switch (action) {
            case 'Blacklist':
                if (friendListArr.includes(name_index)) {
                    friendListArr.splice(
                        friendListArr.indexOf(name_index),
                        1,
                        'Blacklisted'
                    );
                    blNameCount++;
                    console.log(`${name_index} was blacklisted.`);
                } else {
                    console.log(`${name_index} was not found.`);
                }
                break;
            case 'Error':
                if (friendListArr[name_index] !== 'Blacklisted' && friendListArr[name_index] !== 'Lost') {
                    console.log(`${friendListArr[name_index]} was lost due to an error.`);
                    friendListArr.splice(name_index, 1, 'Lost');
                    lostNameCount++;
                }
                break;
            case 'Change':
                if(friendListArr[name_index]){
                    console.log(`${friendListArr[name_index]} changed his username to ${updateName}.`);
                    friendListArr.splice(name_index, 1, updateName);
                }
                break;
            case 'Report':
                console.log(`Blacklisted names: ${blNameCount}\nLost names: ${lostNameCount}\n${friendListArr.join(' ')}`);
                break;
        }
    }
}

main(`Mike, John, Eddie`, [
    `Blacklist Mike`,
    `Error 0`,
    `Error 1`,
    `Change 2 Mike123`,
    `Report`,
]);
