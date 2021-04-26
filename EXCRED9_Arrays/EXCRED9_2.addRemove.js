function main(comArr) {
    let numArr = [];
    let num = 1;

    for (let i = 0; i < comArr.length; i++) {
        switch (comArr[i]) {
            case 'add':
                numArr.push(num);
                break;
            case 'remove':
                numArr.pop();
                break;
        }
        num++;
    }

    if (numArr.length > 0) {
        console.log(numArr.join(' '));
    } else {
        console.log(`Empty`);
    }
}

main(['add', 'add', 'add', 'add']);
main(['add','add','remove','add','add']);
main(['remove','remove','remove']);
