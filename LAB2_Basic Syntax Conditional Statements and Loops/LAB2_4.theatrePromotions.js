function main(dayType, age) {
    let ticketPrice = 0;

    if (age >= 0 && age <= 18) {
        switch (dayType) {
            case 'Weekday':
                ticketPrice = 12;
                break;
            case 'Weekend':
                ticketPrice = 15;
                break;
            case 'Holiday':
                ticketPrice = 5;
                break;
            default:
                ticketPrice = 'Error!';
                break;
        }
    } else if (age > 18 && age <= 64) {
        switch (dayType) {
            case 'Weekday':
                ticketPrice = 18;
                break;
            case 'Weekend':
                ticketPrice = 20;
                break;
            case 'Holiday':
                ticketPrice = 12;
                break;
            default:
                ticketPrice = 'Error!';
                break;
        }
    } else if (age > 64 && age <= 122) {
        switch (dayType) {
            case 'Weekday':
                ticketPrice = 12;
                break;
            case 'Weekend':
                ticketPrice = 15;
                break;
            case 'Holiday':
                ticketPrice = 10;
                break;
            default:
                ticketPrice = 'Error!';
                break;
        }
    } 
    
    if (age < 0 || age > 122 || ticketPrice === 'Error!') {
        console.log('Error!');
    } else {
        console.log(`${ticketPrice}$`);
    }

}

main('Weekday', 42);
main('Holiday', -12);
main('Holiday', 15);
main('Birthday', 18);
