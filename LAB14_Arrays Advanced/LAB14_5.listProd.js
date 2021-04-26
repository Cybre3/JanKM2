function main(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((product, index) => {
        console.log(`${index + 1}.${product}`);
    });
}

main(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
