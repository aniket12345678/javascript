let addsNum = (val) => {
    return val;
}

let input_num = prompt("Enter a number:- ");

let adds = (input_number) => {
    return addsNum(10)+ parseInt(input_number);
}

let answer = adds(input_num);

console.log(answer);