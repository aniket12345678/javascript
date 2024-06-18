let new_promise = new Promise(function (resolve,reject) {
    let a = 1;
    let b = 20;

    var random_val = a + (b-a)*Math.random();

    if (random_val>=1 && random_val<=10) {
        resolve("promise fulfiled");
        alert(random_val);
    }
    else {
        reject("promise not fulfiled");
        alert(random_val);
    }
})


// function fulfilment(text) {
//     console.log(text);
// }

// function rejection(text) {
//     console.log(text);
// }

// new_promise.then(fulfilment).catch(rejection);


new_promise.then(function (text) {
    console.log(text);
}).catch(function (text) {
    console.log(text);
});