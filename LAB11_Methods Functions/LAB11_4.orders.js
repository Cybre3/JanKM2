function main(product, qty) {
    console.log((productPrice(product) * qty).toFixed(2));
}

function productPrice(prod) {

    switch (prod) {
        case 'coffee': return 1.50;
        case 'water': return 1.00;
        case 'coke': return 1.40;
        case 'snacks': return 2.00;
    }

}

main('water', 5);