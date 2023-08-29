function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => console.log(data))

}
function loaduser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayusers(data))//fun call


}
//displayusers(data)
function displayusers(data) {
    console.log(data)
}