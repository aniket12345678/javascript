const checkLowercase = () => {
    let dummy_string = document.getElementById("input_text").value;

    let html = "";

    for (let i = 0; i < dummy_string.length; i++) {
        if (dummy_string.charCodeAt(i)>=97 && dummy_string.charCodeAt(i)<=122) {
            html += dummy_string.charAt(i);
        }
    }
    document.getElementById("hidden_word").innerHTML = html;
}