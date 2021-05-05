class Flight {
    constructor(destination, status) {
        this.Destination = destination;
        this.Status = status;
    }
}

function main(flightInfoArr) {
    const flightsArr = flightInfoArr[0];
    const newChangedStatusArr = flightInfoArr[1];
    const checkFlightStatus = flightInfoArr[2][0];
    // const newChangedStatusArr = flightInfoArr[1].join(' ');
    // const checkFlightStatus = flightInfoArr[2].join('');
    let flightStatusObj = {};
    let arr = [];

    if(newChangedStatusArr.join(', ').includes(checkFlightStatus)) {
        console.log('Working');
    }

    for(let flight of flightsArr){
        let tempArr = flight.split(' ');
        let fltNum = tempArr.shift();
        let dest = tempArr.join(' ');
        console.log(fltNum, dest);
        // flight = flight.split(' ');
        // let flightNum = flight[0];
        // let fltDestin = '';
        // flight.length === 2 ? fltDestin = flight[1] : fltDestin = flight[1].concat(` ${flight[2]}`);
        // console.log(fltDestin);
    }
}

main([
    [
        'WN269 Delaware',
        'FL2269 Oregon',
        'WN498 Las Vegas',
        'WN3145 Ohio',
        'WN612 Alabama',
        'WN4010 New York',
        'WN1173 California',
        'DL2120 Texas',
        'KL5744 Illinois',
        'WN678 Pennsylvania',
    ],
    [
        'DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled',
    ],
    ['Cancelled'],
]);
