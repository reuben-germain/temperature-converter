document.querySelector("#convert").addEventListener('click', convertThat)

function convertThat(){
    let degree = document.querySelector('#temp').value
    
    degree = degree * 1.8 + 32

    console.log(degree);
}