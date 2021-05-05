class Flight {
    constructor(destination, status) {
        this.Destination = destination;
        this.Status = status;
    }
}

function main(flightInfoArr) {
    const regex = /(?<flightNum>[A-Z]{2}[0-9]{3,}) (?<destination>[A-Z][a-z]{2,}\ ?\w+)/gm;
    const flightsArr = flightInfoArr[0];
    const newChangedStatusArr = flightInfoArr[1].join(' ');
    const checkFlightStatus = flightInfoArr[2].join('');
    let flightStatusObj = {};
    let arr = [];

    for (let flight of flightsArr) {
        let flightInfo = regex.exec(flightsArr);
        if (
            newChangedStatusArr.includes(checkFlightStatus) &&
            newChangedStatusArr.includes(flightInfo.groups.flightNum)
        ) {
            for(let flightObj of flightInfo.groups.destination) {

                console.log(flightInfo.groups.destination);
            }
            
            flightStatusObj.Destination = flightInfo.groups.destination;
            flightStatusObj.Status = checkFlightStatus;
            arr.push(flightStatusObj);
        } else {
        }
    }

    console.log(arr);
    for(let obj of arr){
        console.log(obj);
    }
}

// function CheckFlight(flightInfoArr){
//     const flightsArr = flightInfoArr[0];
//     const newChangedStatusArr = flightInfoArr[1].join(' ');

//     for(let flight of flightsArr){
//         let destination = flight.slice('/[A-Z]{2}[0-9]{3,}/gm');
//     }

// }
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
