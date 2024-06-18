let t0 = 0;
let t1 = 1;

let input_val = prompt("Enter the term:- ");

let fibonacci = (input_val) => {
    console.log(t0);
    console.log(t1);
    let t2;
    for (let i = 0; i < (input_val-2); i++) {
        t2 = t0+t1;
        console.log(t2);
        t0 = t1;
        t1 = t2;
    }
}

fibonacci(input_val);