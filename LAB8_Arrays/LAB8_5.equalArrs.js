function main(arr1, arr2) {

    let sum = 0;
    let status = true;

    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] === arr2[i]){
            sum += Number(arr1[i]);
        } else {
            status = false;
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            break;
        }
    }

    if(status === true){
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

main(['10','20','30'], ['10','20','30']);
main(['1','2','3','4','5'], ['1','2','4','4','5']);
main(['1'], ['10']);