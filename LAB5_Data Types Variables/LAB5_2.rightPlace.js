function main(txt, ch, matchTxt) {

    txt = txt.replace('_', ch);

    if (txt === matchTxt){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

main('Str_ng', 'I', 'Strong');
main('Str_ng', 'i', 'String');