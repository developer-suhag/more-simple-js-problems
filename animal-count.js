const animalDenseFirst10Miles = 10;
const animalDenseSecond10Miles = 50;
const animalDenseRestMiles = 100;


function animalCounts(miles) {

    if (miles <= 10) {
        const animalQuantity = animalDenseFirst10Miles * miles;
        return animalQuantity;
    } else if (miles <= 20) {
        const firstAnimalDense = animalDenseFirst10Miles * 10;
        const restMiles = miles - 10;
        const secondAnimalsDense = restMiles * animalDenseSecond10Miles;
        const totlaAnimal = secondAnimalsDense + firstAnimalDense;
        return totlaAnimal
    } else {
        const firstAnimalDense = animalDenseFirst10Miles * 10;
        const secondAnimalsDense = animalDenseSecond10Miles * 10;
        const restMiles = miles - 20;
        const restAnimalDense = animalDenseRestMiles * restMiles;
        const totlaAnimal = firstAnimalDense + secondAnimalsDense + restAnimalDense;
        return totlaAnimal

    }
}


const animalDensity = animalCounts(30)
console.log('Total animal found:', animalDensity);