function loadData2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)   // fetch mane niye asha
        .then(response => response.json())    // fetch kora url er datake json a convert kore
        .then(data => console.log(data))     // convert kora json er datake console a show kore
}