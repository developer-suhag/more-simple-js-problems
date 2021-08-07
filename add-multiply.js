/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/


function woodQuantityCalculator(chairQuantity, tableQuantity, bedQuantity) {
    //per product wood in cft
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    //product wood calculation 
    const chairWoodQuantity = chairQuantity * perChairWood;
    const tableWoodQunattiy = tableQuantity * perTableWood
    const bedWoodQuantity = bedQuantity * perBedWood;

    // total wood calculation
    const totalWoodQuantity = chairWoodQuantity + tableWoodQunattiy + bedWoodQuantity;
    return totalWoodQuantity;
}

function woodPriceCalcutaion(woodQuantity) {
    const woodPricePerCft = 1100;

    const totalMoney = woodPricePerCft * woodQuantity;
    return totalMoney;
}

const totalWoodNeed = woodQuantityCalculator(20, 4, 3);
const woodPrice = woodPriceCalcutaion(totalWoodNeed);
console.log('Total Wood needed:', totalWoodNeed, 'CFT');
console.log('Total Money needed:', woodPrice, 'Taka');