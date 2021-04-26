function main(stringArr) {
    stringArr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(stringArr.join('\n'));
}

main([
    'limousine',
    'motorcycle',
    'car',
    'bike',
    'skateboard',
    'scooters',
    'helicopter',
    'airplane',
    'jet',
    'bus',
    'motorcycle',
    'jet',
    'road bike',
    'van',
]);
