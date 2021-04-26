function main(distance, passengers, dieselPricePerLiter) {
    // emptyBus goes 100km with 7L diesel
    // one person increases fuel consumption by 100 ml
    
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.1;
    let moneyNeeded = neededFuel * dieselPricePerLiter;
    console.log(`Needed money for that trip is ${moneyNeeded}lv.`);
}

main(260, 9, 2.49);
main(90, 14, 2.88);