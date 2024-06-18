let promise = new Promise((resolve, reject) => {
    let x = 0;

    if (x===0) {
        resolve();
    }
    else {
        reject();
    }

});

let fulfilment = () => {
    alert("success");
}

let rejection = () => {
    alert("failure");
}


promise.then(fulfilment);

promise.catch(rejection);