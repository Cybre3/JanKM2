function main(arr1, arr2) {

    let thirdArr = [];

    for (let i in arr1) {
        if (i % 2 === 0) {

            thirdArr.push(Number(arr1[i]) + Number(arr2[i]));
        } else {
            thirdArr.push(arr1[i] + arr2[i]);
        }
    }

    console.log(thirdArr.join(' - '));
}

main(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
