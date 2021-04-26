function main(age) {
    let type = '';

    if (age < 3 && age >= 0) {
        type = 'baby';
    } else if (age < 14) {
        type = 'child';
    } else if (age < 20) {
        type = 'teenager';
    } else if (age < 66) {
        type = 'adult';
    }  else if (age >= 66) {
        type = 'elder';
    }

    console.log(type);
}

main(20);
main(1);
main(100);
