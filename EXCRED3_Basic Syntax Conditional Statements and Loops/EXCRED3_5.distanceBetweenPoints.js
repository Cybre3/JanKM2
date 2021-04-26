function main(x1, y1, x2, y2) {
    
    let x = x2 - x1;
    let y = y2 - y1;

    let distance = Math.sqrt((x*x) + (y*y));

    console.log(distance);
}

main(2, 4, 5, 0);
main(2.34, 15.66, -13.55, -2.9985);