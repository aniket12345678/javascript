let num = prompt("Enter a number:- ");

let tens_digit = parseInt(num%10);
let units_digit = parseInt(num/10);

let swap_num = (tens_digit*10) + units_digit;

if (num>swap_num) {
    console.log(true);
}
else {
    console.log(false);
}