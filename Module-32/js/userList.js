function loadUserList() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())     // convert to json
    .then(data => displayUserList(data))
}

function displayUserList(values) {
    const parentOl = document.getElementById('user-list');    // parent ke deke ana
    for(const value of values) {
        // console.log(value.name);
        const li = document.createElement('li');    // list create kora
        li.innerText = value.username;      // list er vitore innerText hishebe values er protita element er email attribute er value rakha
        parentOl.appendChild(li);    // she list ol er moddhe append korano
    }
}