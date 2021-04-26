function main(strArr) {
    let rotations = strArr.pop();

    for (let i = 0; i < rotations; i++) {
        let lastEl = strArr.pop();
        strArr.unshift(lastEl);
    }

    console.log(strArr.join(' '));
}

main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
main(['remove', 'add', 'remove', '5']);
