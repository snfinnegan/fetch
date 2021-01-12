//document.querySelector('#button').addEventListener('click', getUrl);

const http = new whizzHTTP;
http.get('https://api.github.com/users')
    .then(data => {
        let output = '';
        data.forEach(user => 
            output += `<li>${user.login}</li>`
        );
        document.getElementById('output').innerHTML = output;            
    })
    .catch(err => console.log(err));



// function getUrl(){
//     fetch('https://api.github.com/users')
//         .then(res => res.json())
//         .then(data => {
//             let output = '';
//             data.forEach(user => 
//                 output += `<li>${user.login}</li>`
//             );
//             document.getElementById('output').innerHTML = output;            
//         })
//         .catch(err => console.log);
        
// }