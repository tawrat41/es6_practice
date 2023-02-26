function loadData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => display(data));
}

function display(data){

    const postDiv = document.getElementById('user-container');

    for(const user of data){
        console.log(user.title);
        const div = document.createElement('div');
        div.innerHTML = `
        <h4>${user.title}</h4>
        <p>${user.body}</p>
        `
        postDiv.appendChild(div);

       const colorDiv = document.querySelectorAll('div');
       colorDiv.style.backgroundColor = 'skyblue';
    }
}


