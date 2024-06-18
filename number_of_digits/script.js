//--------------------------------- without using string ---------------------------------//

let count = 1;
let numberOf_digits = (numVal) => {
    if (numVal>10) {
        count++;
        numberOf_digits(parseInt(numVal/10))
    }
    return count;
}


//--------------------------------- with using string ---------------------------------//

// let numberOf_digits = (numVal) => {
//     return (numVal).toString().length;
// }
let num = prompt("Enter number:- ");

let returned_value = numberOf_digits(num);
console.log("no of digits :-"+returned_value);