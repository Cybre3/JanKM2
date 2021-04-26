function main(numArr) {
    let lastEl = Number(numArr.pop());
    let output = '';

    for (let i = 0; i < numArr.length; i += lastEl) {
        output += `${numArr[i]} `;
    }
    
    console.log(output);
}

main(['5', '20', '31', '4', '20', '2']);
main(['dsa','asd','test','test','2']);
main(['1','2','3','4','5','6']);