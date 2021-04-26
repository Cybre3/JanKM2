function main(year, month, day) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            if (day === 31) {
                day = 1;
                if (month === 12) {
                    month = 1;
                    year++;
                } else {
                    month++;
                }
            } else {
                day++;
            }
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            if (day === 30) {
                day = 1;
                if (month === 12) {
                    month = 1;
                    year++;
                } else {
                    month++;
                }
            } else {
                day++;
            }
            break;
        case 2:
            if (day === 28) {
                day = 1;
                if (month === 12) {
                    month = 1;
                    year++;
                } else {
                    month++;
                }
            } else {
                day++;
            }
            break;
    }

    // console.log(`${year}-${month}-${day}`);
    let tomorrow = Date(`${year}, ${month}, ${day}`);
    console.log(tomorrow);
}

main(2016, 9, 30);
