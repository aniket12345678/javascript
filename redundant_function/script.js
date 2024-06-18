let original_func = (strval) => {
    return strval;
}


let redundant = (string) => {
    return original_func(string);
}

let input_str = prompt("Enter string:- ");

let answer = redundant(input_str);

console.log(answer);