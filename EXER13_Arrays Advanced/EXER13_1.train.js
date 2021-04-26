function main(arrayOfStrings) {
    const wagons = arrayOfStrings.shift().split(' ').map(Number);
    const wagMaxCap = +arrayOfStrings.shift();

    arrayOfStrings.forEach((command) => {
        if (command.includes('Add')) {
            command = command.split(' ');
            let num = +command[1];

            wagons.push(num);
        } else {
            let peopleToAdd = +command;
            let letsFillWagons = wagons.filter(
                (wagon) => wagon + peopleToAdd <= wagMaxCap
            );
            let fillWagonIndex = wagons.indexOf(letsFillWagons[0]);

            wagons[fillWagonIndex] = wagons[fillWagonIndex] + peopleToAdd;
        }
    });

    console.log(wagons.join(' '));
}

main(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
main(['0 0 0 10 2 4', '10', 'Add 10', '10', '10', '10', '8', '6']);
