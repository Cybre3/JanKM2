function main(str, timesRepeat) {
    console.log(repeatStr(str, timesRepeat));
}

function repeatStr(str, timesRepeat) {
    let repeatArr = [];

    for(let i = 0; i < timesRepeat; i++) {
        repeatArr.push(str);
    }

    return repeatArr.join('');
}

main('abc', 3);
main('String', 2);