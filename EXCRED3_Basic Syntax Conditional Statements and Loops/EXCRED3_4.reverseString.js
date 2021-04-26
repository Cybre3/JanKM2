function main(string) {

    let reverseString = '';
    
    for(let i = string.length - 1; i >= 0; i--){
        reverseString += string[i];
    }

    console.log(reverseString);
}

main('Hello');
main('Kingsland');
main('12345');