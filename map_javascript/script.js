let arr = [4,36,64,81,16];

//-------------------------------------- no of ways to use map function --------------------------------------//
/*
1) Map function always return array as the result

2) Map function calls a function once for each element in an array.

3) Map function does not change the original array..

*/





// let double = arr.map(Math.sqrt);

// function square_root(val) {
//     return val**0.5;
// }

// let square_root = (x) => {
//     return Math.sqrt(x);
// }


// let double = arr.map(square_root);

// console.log(double);





//-------------------------------------- Adavance usage of Map function ------------------------------------------//

const user_data = [
    {fname: "aniket",lname: "adak", age:"24"},
    {fname: "amit",lname: "shah", age:"75"},
    {fname: "ashton",lname: "kutcher", age:"49"},
    {fname: "julia",lname: "roberts", age:"56"},
];

const fetch_user_data = (x) => {
    return x.fname +" "+x.lname;
}

let fetch_userdata = user_data.map(fetch_user_data);

console.log(fetch_userdata);