const drinks = [
    {
        name: "lemonade",
        price: 50
    },
    {
        name: "lime",
        price: 10
    },
    {
        name: "apple",
        price: 70
    },
    {
        name: "lime",
        price: 30
    }
];

let sortDrinkByPrice = (arr) => {
    arr.sort((a, b) => {
        console.log(a.price - b.price);
    });
    arr.forEach((e) => {
        console.log(`${e.name} ${e.price}`);
    });
}

sortDrinkByPrice(drinks);