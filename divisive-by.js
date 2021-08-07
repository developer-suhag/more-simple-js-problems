for (let i = 1; i <= 50; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('Foobar');
    } else if (i % 3 == 0) {
        console.log('foo');
    } else if (i % 5 == 0) {
        console.log('bar');
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++) {
    if ((i % 5 == 0) && (i % 2 == 0)) {
        console.log('SM');
    } else if (i % 5 == 0) {
        console.log('S');
    } else if (i % 2 == 0) {
        console.log('M');
    } else {
        console.log(i);
    }
}