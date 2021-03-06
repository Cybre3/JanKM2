function main(radius, height) {

    let volume = Math.PI * (radius ** 2) * height / 3;
    let area = Math.PI * radius * (radius + Math.sqrt(height ** 2 + radius ** 2));
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

main(3, 5);
main(3.3, 7.8);