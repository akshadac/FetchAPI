// // Task 1
// fetch("https://api.github.com/users/akshadac").then((response) => response.json())
// .then(users => {
//    console.log(users.public_repos)
//    console.log(users.followers);
// });

// fetch("https://api.github.com/users/akshadac/followers").then((response) => response.json())
// .then(users => {
//     users.forEach((user) => {console.log(user.id)})
//    });

// //Task 2
// //q1
// fetch("https://jsonplaceholder.typicode.com/comments")
//     .then((response) => response.json())
//     .then(comments => {
//         // how many users we have
//         console.log(comments.length);
//     });
// //q2
// fetch("https://jsonplaceholder.typicode.com/photos")
//     .then((response) => response.json())
//     .then(photos => {
//         // how many users we have
//         console.log(photos.length);
//     });
// //q3
// fetch("https://jsonplaceholder.typicode.com/users")
//      .then((response) => response.json())
//      .then(users1 => {
//          users1.forEach((user1) => {
//             console.log(user1.name + " , " + user1.email);
//         });
//     });
// //q4
// fetch("https://jsonplaceholder.typicode.com/users")
//      .then((response) => response.json())
//      .then(users2 => {
//          users2.forEach((user2) => {
//             console.log(user2.name + " , " +  user2.address.city ) ;
//         });
//     });
// //q5 
// fetch("https://jsonplaceholder.typicode.com/todos?completed=true")
//     .then((response) => response.json())
//     .then(todo => {
//         console.log(todo.length)
//     });
// //q6
// fetch("https://jsonplaceholder.typicode.com/todos?completed=false")
//     .then((response) => response.json())
//     .then(todo1 => {
//         todo1.forEach((todo11) => {
//             console.log(todo11.title + " , " + todo11.id)
//         })
//     });
// //q7

//q8
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((albums) => {
        albums.forEach((album) => {
            if (album.title === "quidem molestiae enim") {
                let ids = album.id
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then((response) => response.json())
                    .then((users) => {
                        users.forEach((user) => {
                            if (user.id === ids){
                                console.log("The user who own the album \ 'Quidem Molestiae Edim \' is " + user.name)
                            }
                        })
                    })
        }
    });
});
