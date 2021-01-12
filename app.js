document.querySelector('#button').addEventListener('click', getUrl);

function getUrl(){
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            let output = '';
            data.forEach(user => 
                output += `<li>${user.login}</li>`
            );
            document.getElementById('output').innerHTML = output;            
        })
        .catch(err => console.log);
        
}