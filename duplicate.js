const friendsNames = ['Abul', 'Babul', 'Cabul', 'Dabul', 'Babul', 'Ebul', 'Cabul', 'Fabul', 'Dabul', 'Abul', 'Babul', 'Abul', 'Gabul', 'Ebul', 'Cabul', 'Habul']

function duplicateFinder(names) {
    const unique = [];
    /*   for (let i = 0; i < names.length; i++) {
        const element = names[i]
        console.log(element);
    } */

    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
        console.log(unique.indexOf(element));

    }

    return unique;

}

const uniqueNamesFound = duplicateFinder(friendsNames);
console.log(uniqueNamesFound);



function findDuplicateNumbers(numbers) {
    const uniqueNumbers = [];
    for (const iterator of numbers) {
        if (uniqueNumbers.indexOf(iterator) == -1) {
            uniqueNumbers.push(iterator);
        }
    }
    return uniqueNumbers;
}

const numbersArr = [32, 44, 54, 53, 53, 98, 32, 90, 65, 105, 100, 54, 99, 99, 05, 53, 90, 100, 105, 32];

const foundUniqueNumbers = findDuplicateNumbers(numbersArr);

console.log(foundUniqueNumbers);


function getDuplicateName(devNames) {
    const pureDevNames = []
    for (const newNames of devNames) {
        if (pureDevNames.indexOf(newNames) == -1) {
            pureDevNames.push(newNames)
        }

    }
    return pureDevNames;
}

const developerNames = ['Suhag', 'Sakib', 'Sohan', 'Suhag', 'Selim', 'Sakib', 'Tisha', 'Sanji', 'Jasy', 'Amran', 'Suhag', 'Nite', 'Sanji', 'Tisha', 20, 54, 65, 89, 01, 65];

const gotThePureDevNames = getDuplicateName(developerNames);
console.log(gotThePureDevNames);