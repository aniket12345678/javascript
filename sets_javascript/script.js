const mySet = new Set();

mySet.add("aniket");
mySet.add("aniket1");
mySet.add("aniket");
mySet.add("aniket");
mySet.add("aniket");
mySet.add(34);
mySet.add(34);
mySet.add(34);

// console.log(mySet);


const mySet2 = new Set([1,2,3,{fname: "aniket"},{fname: "aniket"}]);

// console.log("Before deletion:- ",mySet2);

// mySet2.clear();

console.log("After deletion:- ",mySet2);

console.log(Array.from(mySet2));

// mySet2.forEach(element => {
//     console.log(element);
// });


// console.log(mySet2.keys());