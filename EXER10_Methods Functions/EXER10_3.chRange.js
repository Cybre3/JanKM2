function main(startCh, EndCh) {
    printCh(startCh, EndCh);
}

function printCh(startCh, EndCh) {
    let output = '';
    let start = Math.min(startCh.charCodeAt(), EndCh.charCodeAt());
    let end = Math.max(startCh.charCodeAt(), EndCh.charCodeAt());
    
    for (let i = start + 1; i < end; i++) {
        output += `${String.fromCharCode(i)} `;
    }

    console.log(output);
}
main('a', 'd');
main('#', ':');
