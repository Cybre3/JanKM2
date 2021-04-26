function main(numMsgs, msgsArr) {
    const regex = /!(?<command>[A-Z][a-z]{3,})!:\[(?<message>[a-zA-Z]{8,})]/gm;
    let output = '';
    for (let message of msgsArr) {
        if (message.match(regex)) {
            let currentMsg = regex.exec(message);
            for(let ch of currentMsg.groups['message']){
                output += `${ch.charCodeAt()} `;
            }
            console.log(`${currentMsg.groups['command']}: ${output.trim()}`);
        } else {
            console.log('The message is invalid');
        }
    }
}

main(2, [`!Send!:[IvanisHere]`, `*Time@:[Itis5amAlready]`]);
