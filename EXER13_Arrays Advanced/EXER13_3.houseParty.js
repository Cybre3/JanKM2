function main(attendanceArr) {
    let housePartyArr = [];

    attendanceArr.forEach((invitedPersonStatus) => {
        invitedPersonStatus = invitedPersonStatus.split(' is ');
        let name = invitedPersonStatus[0];
        let status = invitedPersonStatus[1];

        if (!housePartyArr.includes(name)) {
            if (status.includes('not')) {
                console.log(`${name} is not in the list!`);
            } else {
                housePartyArr.push(name);
            }
        } else {
            if (status.includes('not')) {
                housePartyArr.splice(housePartyArr.indexOf(name), 1);
            } else {
                console.log(`${name} is already in the list!`);
            }
        }
    });

    console.log(housePartyArr.join('\n'));
}

main([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!',
]);
main([
    'Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!',
]);
