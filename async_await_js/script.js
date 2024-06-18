async function hello() {
    const user_data = await fetch('https://api.github.com/users');
    const response = await user_data.json();
    return response;
}

let message = hello();

message.then((data) => {
    console.log(data);
}).catch(() => {
    console.log("failure");
})