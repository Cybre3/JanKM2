let procedure = (size, method) => {
    switch (method) {
        case 'Cut':
            size = size / 4;
            break;
        case 'Lap':
            size = size * 0.8;
            break;
        case 'Grind':
            size = size - 20;
            break;
        case 'Etch':
            size = size - 2;
            break;
        case 'X-ray':
            size = size + 1;
            break;
        case 'Transporting and washing':
            console.log(`Transporting and washing`);
            size = Math.floor(size);
            break;
    }
    return size;
};

function main(oreArr) {
    let [targetSize, startSize] = oreArr;
    let newSize = startSize;
    let count = {
        'Cut': 0,
        'Lap': 0,
        'Grind': 0,
        'Etch': 0,
        'X-ray': 0,
        method: 'Cut',
        previousMethod: 'Cut'
    };

    while (newSize !== targetSize) {

        if (targetSize < procedure(newSize, 'Cut')) {            
            count.method = 'Cut';
        } else if (targetSize < procedure(newSize, 'Lap')) {
            count.previousMethod = 'Cut';
            count.method = 'Lap';
        } else if (targetSize < procedure(newSize, 'Grind')) {
            count.previousMethod = 'Lap';
            count.method = 'Grind';
        } else if (targetSize < newSize) {
            count.previousMethod = 'Grind';
            count.method = 'Etch';
        } else if (targetSize > newSize) {
            count.previousMethod = 'Etch';            
            count.method = 'X-ray';
        }        

        if (count[count.method] === 0 && count.method === 'Cut') {
            console.log(`Processing chunk ${startSize} microns`);

        } else if (count[count.method] === 0 && count.method !== 'Cut') {
            console.log(`${count.previousMethod} x${count[count.previousMethod]}`);
            newSize = procedure(newSize, 'Transporting and washing');
        }

        count[count.method]++;
        newSize = procedure(newSize, count.method);
    }

    console.log(`${count.method} x${count[count.method]}`);
    console.log(`Finished crystal ${newSize} microns`);
}

main([1375, 50000]);