let find_vowel = () => {
    let char_string = document.getElementById("char_vowel").value;
    let store_arr = char_string.split("");

    const empty_arr = [];

    let count = 0;
    let reverse_counter = 0;
    store_arr.forEach(element => {
        
        empty_arr[(store_arr.length-1)-reverse_counter] = element;

        if (element == "a" || element == "A" || element == "e" || element == "E" || element == "i" || element == "I" || element == "o" || element == "O" || element == "u" || element == "U") {
            count++;
        }
        reverse_counter++;
    });

    console.log("reverse string:- ", empty_arr.join(""));
    console.log('no of vowels:- ',count);
};