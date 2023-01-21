function displayPhotos() {
    const url = 'https://jsonplaceholder.typicode.com/photos';
    fetch(url)
        .then(response => response.json())
        .then(data => photos(data))   // first of all ekhane ashbe, then dekhbe je photos function call kora ache
}

function photos(value) {   // then photos function er kache ashbe with parameter value, then photos function ja return kore dicche , ta niye ferot jabe
    console.log(value)
}