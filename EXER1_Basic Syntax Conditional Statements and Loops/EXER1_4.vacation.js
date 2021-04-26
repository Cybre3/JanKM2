function main(numOfPpl, groupType, dayOfWeek) {
    let rate = 0;

    if (dayOfWeek === 'Friday') {
        switch (groupType) {
            case 'Students':
                rate = 8.45;
                break;
            case 'Business':
                rate = 10.9;
                break;
            case 'Regular':
                rate = 15.0;
                break;
        }
    }

    if (dayOfWeek === 'Saturday') {
        switch (groupType) {
            case 'Students':
                rate = 9.8;
                break;
            case 'Business':
                rate = 15.6;
                break;
            case 'Regular':
                rate = 20.0;
                break;
        }
    }

    if (dayOfWeek === 'Sunday') {
        switch (groupType) {
            case 'Students':
                rate = 10.46;
                break;
            case 'Business':
                rate = 16.0;
                break;
            case 'Regular':
                rate = 22.5;
                break;
        }
    }

    let groupPrice = numOfPpl * rate;

    if (groupType === 'Students' && numOfPpl >= 30) {
        groupPrice *= 0.85;
    } else if (groupType === 'Business' && numOfPpl >= 100) {
        groupPrice = (numOfPpl - 10) * rate;
    } else if (groupType === 'Regular' && numOfPpl >= 10 && numOfPpl <= 20) {
        groupPrice *= 0.95;
    }

    console.log(`Total price: ${groupPrice.toFixed(2)}`);
}

main(30, 'Students', 'Sunday');
main(40, 'Regular', 'Saturday');
