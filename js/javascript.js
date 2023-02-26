// document.getElementById('apply-bg').addEventListener('click', function(){
//     const friends = document.getElementsByClassName('friend');

//     // console.log(friends)
//     for(const friend of friends){
//         friend.style.backgroundColor = 'blue';
//     }
// })


// document.getElementById('add-new').addEventListener('click', function(){
//     const friendContainer = document.getElementById('friends');
//     const friend = document.createElement('div');
//     // console.log('hello');
//     friend.innerHTML = `
//         <h3 class="friend-name">New friend</h3>
//         <p>dfps9ehufne9fp8</p>

//     `
//     friendContainer.appendChild(friend);
// })

// const friends = ["Moushumi", "Misha", "Manna", "mimi" , "mahiya"];

// console.log(friends.find(friend => friend.length==5));

const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);