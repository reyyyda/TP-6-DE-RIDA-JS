document.getElementById('changeText').addEventListener ('click', function() {
     document.querySelector('p').innerText = 'Un clic a été détecté'; });

document.getElementById('changeColor').addEventListener('click', function() {
     document.querySelector('p').classList.toggle('changeColor'); });

let x= document.getElementById('changer');
x.addEventListener('click', function() {
     x.innerHTML = 'Un clic a été détecté';  
    });
