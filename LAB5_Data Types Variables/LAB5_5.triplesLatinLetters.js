function main(n) {
    for (let ch1 = 97; ch1 < 97 + n; ch1++) {
        for (let ch2 = 97; ch2 < 97 + n; ch2++) {
            for (let ch3 = 97; ch3 < 97 + n; ch3++) {
                console.log(
                    `${String.fromCharCode(ch1)}${String.fromCharCode(
                        ch2
                    )}${String.fromCharCode(ch3)}`
                );
            }
        }
    }
}

main(3);
