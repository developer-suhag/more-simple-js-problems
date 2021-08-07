const phones = [{
        name: 'Samsung S3',
        price: 45000,
        ram: 8,
        rom: 64
    },
    {
        name: 'Iphone 12 Pro',
        price: 120000,
        ram: 32,
        rom: 128
    },
    {
        name: 'Iphone 12',
        price: 100000,
        ram: 32,
        rom: 128
    },
    {
        name: 'Samsung J7',
        price: 18900,
        ram: 2,
        rom: 16
    },
    {
        name: 'Iphone 12 Pro Max',
        price: 150000,
        ram: 32,
        rom: 128
    },

];


let chepest = phones[0];

for (const phone of phones) {
    if (phone.price < chepest.price) {
        chepest = phone;
    }
}

console.log(chepest);



/* const bikes = [

    {
        name: 'Honda',
        price: 150000,
        cc: 150
    },
    {
        name: 'RTR',
        price: 200000,
        cc: 150
    },
    {
        name: 'CT 100',
        price: 70000,
        cc: 100
    },
    {
        name: 'Apache',
        price: 175000,
        cc: 150
    },
    {
        name: 'Pulsar',
        price: 180000,
        cc: 150
    },
    {
        name: 'Runner',
        price: 50000,
        cc: 90
    },
    {
        name: 'Fz',
        price: 250000,
        cc: 150
    },
    {
        name: 'Duying',
        price: 40000,
        cc: 50
    },
];

let cheapestBike = bikes[0];

for (const bike of bikes) {
    if (bike.price < cheapestBike.price) {
        cheapestBike = bike;
    }
}

console.log('The cheapest bike is:', cheapestBike);
 */


const bikes = [

    {
        name: 'Honda',
        price: 150000,
        cc: 150
    },
    {
        name: 'RTR',
        price: 200000,
        cc: 150
    },
    {
        name: 'CT 100',
        price: 70000,
        cc: 100
    },
    {
        name: 'Apache',
        price: 175000,
        cc: 150
    },
    {
        name: 'Pulsar',
        price: 180000,
        cc: 150
    },
    {
        name: 'Runner',
        price: 50000,
        cc: 90
    },
    {
        name: 'Fz',
        price: 250000,
        cc: 150
    },
    {
        name: 'Duying',
        price: 40000,
        cc: 50
    },
];

function findCheapestBike(bikeName) {
    let cheapestBike = bikes[0];
    for (const bike of bikes) {
        if (bike.price < cheapestBike.price) {
            cheapestBike = bike;
        }
    }
    return cheapestBike;
}

const gotCheapestBike = findCheapestBike(bikes);
console.log('The cheapest bike is:', gotCheapestBike);