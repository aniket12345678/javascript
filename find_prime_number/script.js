let input_val = prompt("Enter a number:- ");

const find_prime = (num) => {
    let count = 0;
    for (let i = 2; i < num; i++) {
        if (num%i==0) {
            count++;
        }
    }

    if (count==0) {
        return "prime number";
    }
    else {
        return "composite number";
    }
}
let answer = find_prime(input_val);

console.log(answer);