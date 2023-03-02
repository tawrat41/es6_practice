const loadUSer = () =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => display(data));
} 

const display = user =>{
    console.log(user[1].name)

    getName = document.getElementById('name');
    getName.innerText = user[1].name;

    getEmail = document.getElementById('email');
    getEmail.innerText = user[1].email; 
}

loadUSer();