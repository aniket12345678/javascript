let arr = [31,78,53,21,5,14,43,62,88,90];

// 1) filter the numbers greater than 50

// const filter_arr = (x) => {
//     return x>50;
// }


// 2) filter the even numbers

const filter_arr = (x) => {
    if (x%2==0) {
        return x;
    }
}

let filtered_arr = arr.filter(filter_arr);

console.log(filtered_arr);