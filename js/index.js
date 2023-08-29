function loaduser2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayusers(data))    //fun call

}

//displayusers(data)

function displayusers(data) {
    const ul = document.getElementById('userlist')

    for (const user of data) {

        console.log(user.email)
        const li = document.createElement('li')
        li.innerText = user.name
        ul.appendChild(li)

    }
}