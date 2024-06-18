let num = prompt("Enter the number:- ");

let numLength = prompt("Enter the length:- ");


let multipleArray = (base,element) => {
    let mulArr = [];
    for (let i = 0; i <element; i++) {
        let product = base*(i+1);
        mulArr.push(product);
    }
    return mulArr
}

let output = multipleArray(num,numLength);

console.log(output);