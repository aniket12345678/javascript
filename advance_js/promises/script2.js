let shopping_cart = ['laptop', 'watch', 'mobile phone', 'shirt'];

var cartProducts = "";

for (let i = 0; i < shopping_cart.length; i++) {
    const element = shopping_cart[i];
    cartProducts+=element+',';
}

let createOrder = () => {
    let count;
    if (!confirm("Are you sure you want to buy these products ("+cartProducts+")?")) {
        count=0;
    }
    else {
        count=1;
    }

    let new_promise = new Promise((resolve, reject) => {
        if (count==1) {
            resolve()
        } else {
            reject("order rejected");
        }
    })
    
    return new_promise;
}

let payment = () => {
    console.log("payment done");
}
let output = createOrder();

output.then(payment).catch((err) => { console.log(err); });