function main(inputArr) {
    let arr = inputArr.shift().split(' ').map(Number);

    inputArr.forEach((command) => {
        let [com, num1, index] = command.split(' ');
        num1 = +num1;
        index = +index;

        switch (com) {
            case 'Add':
                arr.push(num1);
                break;
            case 'Remove':
                arr = arr.filter((el) => el !== num1);
                break;
            case 'RemoveAt':
                arr.splice(num1, 1);
                break;
            case 'Insert':
                arr.splice(index, 0, num1);
                break;
        }
    });

    console.log(arr.join(' '));
}

main(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3']);
