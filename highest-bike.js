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


function findCostlyBike(bikeName) {
    let costlyBike = bikes[0];
    for (const bike of bikes) {
        if (bike.price > costlyBike.price) {
            costlyBike = bike
        }
    }
    return costlyBike;
}

const gotTheBike = findCostlyBike(bikes);
console.log('The most costly bike is:', gotTheBike);