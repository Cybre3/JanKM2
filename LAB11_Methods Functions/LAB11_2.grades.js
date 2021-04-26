function main(input) {
    console.log(checkGrade(input));
}


function checkGrade(grade) {

    if (grade >= 2.00 && grade <= 2.99) {
        return 'Fail';
    } else if (grade <= 3.49) {
        return 'Poor';
    } else if (grade <= 4.49) {
        return 'Good';
    } else if (grade <= 5.49) {
        return 'Very Good';
    } else if (grade <= 6.00) {
        return 'Excellent';
    } else {
        return 'Error';
    }
}

main(3.33);
main(4.50);
main(2.99);
main(7.00);