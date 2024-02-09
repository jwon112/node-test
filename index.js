const date = new Date();

const viewYear = date.getFullYear 

document.getElementsByClassName('day')[0].addEventListener('click', function hello(event){
    
});



function getIp(){
    const data = {};

    fetch('https://ipinfo.io/58.228.132.67?token=492252d40302ab', {
        method : 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((data)=> {
        document.getElementById('ip').innerHTML = data['ip']
    })
    .catch((error) => {
        console.error('실패: ', error);
    });
}

