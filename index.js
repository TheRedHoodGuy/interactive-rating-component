const Submit = document.getElementById('subbtn');
var rating = 0;
var i;
const display = document.getElementById('selected');
const modal = document.getElementById('md');
const closebtn = document.getElementById('close');
const rateNum = document.getElementsByClassName('rt');

closebtn.addEventListener('click', function() {
    display.innerHTML = rating;
    md.style.width = '0';
    md.style.height = '0';
})

Submit.addEventListener('click', function(event) {
    if (rating == 0){
        alert("Pls Select a rating");
        event.preventDefault
    }
    else{            
        display.innerHTML = rating;
        md.style.width = '100dvw';
        md.style.height = '100dvh';
        md.style.display = 'flex';
    }
})

for (i = 0; i < rateNum.length; i++){
    rateNum[i].addEventListener('click', function() {
        this.classList.toggle("bg-opacity-10");
        this.style.color = 'white';
    })
}

function selectedValue(val){
    rating = val;
}