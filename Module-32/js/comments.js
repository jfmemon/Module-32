function loadComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => displayComments(data))
}


function displayComments(elements) {
    const userComments = document.getElementById('user-comments');
    for(const element of elements) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comments');   // style added
        commentDiv.innerHTML = `
        <p>Post Id: ${element.postId}</p>
        <p>Id: ${element.id}</p>
        <p>Name: ${element.name}</p>
        <p>Email: ${element.email}</p>
        <p>Body: ${element.body}</p>
        `;
        userComments.appendChild(commentDiv);
    }
}