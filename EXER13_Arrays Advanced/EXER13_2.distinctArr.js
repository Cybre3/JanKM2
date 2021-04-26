function main(numsArr) {
    let filteredArr = [];
    let alterThisArr = [...numsArr];

    numsArr.forEach((numsArrNum) => {
        filteredArr.push(alterThisArr[0]);
        let duplicateArr = alterThisArr.filter(
            (num) => num === alterThisArr[0]
        );
        alterThisArr.shift();

        if (duplicateArr.length > 1) {
            for (let i = 1; i < duplicateArr.length; i++) {
                let removeNumIndex = alterThisArr.indexOf(duplicateArr[i]);
                alterThisArr.splice(removeNumIndex, 1);
            }
        }

        if (alterThisArr.length === 0) {
            numsArr = alterThisArr;
        }
    });

    console.log(filteredArr.join(' '));
}
main([4, 5, 8, 5, 234, 5, 3234, 56, 3, 2, 4, 5, 80, 6, 450, 0, 0, 14]);
main([7, 8, 9, 7, 2, 3, 4, 1, 2]);
main([20, 8, 12, 13, 4, 4, 8, 5]);
