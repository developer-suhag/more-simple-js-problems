const products = [{
        name: 'Laptop',
        price: 65000
    },
    {
        name: 'Shirt',
        price: 550
    },
    {
        name: 'Pant',
        price: 800
    },
    {
        name: 'T-Shirt',
        price: 350
    },
    {
        name: 'Watch',
        price: 150
    },
    {
        name: 'Mobile',
        price: 25999
    },
];

function findTotalPrice(productParameter) {
    let totalPrice = 0;

    for (const product of products) {
        totalPrice = totalPrice + product.price;
    }
    return totalPrice;
}

const gotTotalPrice = findTotalPrice(products);
console.log('Total price is:', gotTotalPrice);



const cart = [{
        name: 'Laptop',
        price: 65000,
        quantity: 1,
    },
    {
        name: 'Shirt',
        price: 550,
        quantity: 5,
    },
    {
        name: 'Pant',
        price: 800,
        quantity: 3,
    },
    {
        name: 'T-Shirt',
        price: 350,
        quantity: 8,
    },
    {
        name: 'Watch',
        price: 150,
        quantity: 2,
    },
    {
        name: 'Mobile',
        price: 25999,
        quantity: 3,
    },
];

function cartTotal(productParameter) {
    let total = 0;
    for (const product of cart) {
        const singelProductPrice = product.price * product.quantity;
        total = total + singelProductPrice;
    }
    return total;
}

const shoppingCartTotal = cartTotal(cart);

console.log('The final amount you have to give is:', shoppingCartTotal);