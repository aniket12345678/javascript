let dummy_val = prompt("Enter a number:- ");

function check() {
    let new_promise = new Promise((resolve, reject) => {
        if (dummy_val==1) {
            resolve("success");
        } else {
            reject("failure");
        }
    })

    return new_promise;
}

let output = check();

output.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});