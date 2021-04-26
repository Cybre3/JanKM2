function main(num, placesRoundedTo) {
    if (placesRoundedTo > 15) {
        console.log(parseFloat(num.toFixed(15)));
    } else {
        console.log(parseFloat(num.toFixed(placesRoundedTo)));
    }
}

main(3.1415926535897932384626433832795, 2);
main(10.5, 3);
