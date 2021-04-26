function main(dayNumOfWeek) {
    let weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


    if(dayNumOfWeek > 0 && dayNumOfWeek <= weekDays.length){
        console.log(weekDays[dayNumOfWeek - 1]);
    } else {
        console.log('Invalid day!');
    }
}

main(3);
main(6);
main(11);