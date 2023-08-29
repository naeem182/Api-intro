function loadPost() {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))


}

function displayPost(posts) {
    const postcontainer = document.getElementById('postcontainer')
    for (const post of posts) {
        console.log(post)
        const postdiv = document.createElement('div')
        postdiv.classList.add('post')
        postdiv.innerHTML = `
        <h4>user-${post.userId}</h4>
        <h5>post:${post.title}</h5>
        <p>descrition:${post.body}</p>

        `

        postcontainer.appendChild(postdiv)
    }




}

loadPost()

