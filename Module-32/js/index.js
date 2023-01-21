function displayArrayValue() {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => arrayValue(data))
}

function arrayValue(value) {
    console.log(value);
}