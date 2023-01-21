function loadUserPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayUserPosts(data))
}


function displayUserPosts(elements) {
    const userPosts = document.getElementById('user-posts');
    for(const element of elements) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');     // adding css class(post) from userPost.html  (adding class)
        postDiv.innerHTML = `      
        <p>UserId: ${element.userId}</p>
        <p>Id: ${element.id}</p>
        <p>Title: ${element.title}</p>
        <p>Body: ${element.body}</p>
        `;
        userPosts.appendChild(postDiv);
    }
}

loadUserPosts();