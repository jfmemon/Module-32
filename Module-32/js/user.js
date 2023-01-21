function userInformation() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => users(data))
}

function users(values) {
    for(const value of values) {
        console.log(value.email);
    }
}