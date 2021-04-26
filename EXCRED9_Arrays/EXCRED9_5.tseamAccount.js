function main(comArr) {
    let account = comArr.shift().split(' ');

    for (let string of comArr) {
        let [com, game] = string.split(' ');
        switch (com) {
            case 'Install':
                if (!account.includes(game)) {
                    account.push(game);
                }
                break;
            case 'Uninstall':
                if (account.includes(game)) {
                    account.splice(account.indexOf(game), 1);
                }
                break;
            case 'Update':
                if (account.includes(game)) {
                    account.splice(account.indexOf(game), 1);
                    account.push(game);
                }
                break;
            case 'Expansion':
                let [gameName, expan] = game.split('-');
                if (account.includes(gameName)) {
                    account.splice(account.indexOf(gameName) + 1, 0, `${gameName}:${expan}`);
                }
                break;
        }
    }

    console.log(account.join(' '));
}

main([
    'CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!',
]);
main([
    'CS WoW Diablo',
    'Uninstall XCOM',
    'Update PeshoGame',
    'Update WoW',
    'Expansion Civ-V',
    'Play!',
]);
