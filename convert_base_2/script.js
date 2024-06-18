function convert_base_2(num) {
    let text = num.toString();
    let arr = text.split("");

    let temp_store = 0;

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        let value_element = element*Math.pow(2,((arr.length-(index))-1));
        temp_store += value_element;
    }
    console.log(temp_store);
}