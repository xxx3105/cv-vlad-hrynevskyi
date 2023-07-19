

 function readMorePersInf() {
   let mehr = document.getElementById('mehr-eins');
    let knopf = document.getElementById('knopf-eins');
    mehr.classList.toggle('show');
    knopf.innerHTML = mehr.classList.contains('show') ? '- Personal Information' : '+ Personal Information';
  }

   function readMoreBerufsErf() {
   let mehrTwo = document.getElementById('mehr-zwei');
    let knopfTwo = document.getElementById('knopf-zwei');
    mehrTwo.classList.toggle('show-two');
    knopfTwo.innerHTML = mehrTwo.classList.contains('show-two') ? '- Berufserfahrung' : '+ Berufserfahrung';
   }

function readMoreAusb() {
   let mehrThree = document.getElementById('mehr-drei');
    let knopfThree = document.getElementById('knopf-drei');
    mehrThree.classList.toggle('show-three');
    knopfThree.innerHTML = mehrThree.classList.contains('show-three') ? '- Ausbildung' : '+ Ausbildung';
   }


function readMoreKennInt() {
let mehrFourth = document.getElementById('mehr-vier');
let knopfFourth = document.getElementById('knopf-vier');

mehrFourth.classList.toggle('show-fourth');
knopfFourth.innerHTML = mehrFourth.classList.contains('show-fourth') ? '- Kenntnisse und Interessen' : '+ Kenntnisse und Interessen';
  
}

function readMoreFortschritten() {
let mehrFive = document.getElementById('mehr-fünf');
let knopfFive = document.getElementById('knopf-fünf');

mehrFive.classList.toggle('show-five');
knopfFive.innerHTML = mehrFive.classList.contains('show-five') ? '- Fortschritten/Projekten' : '+ Fortschritten/Projekten';
}


// VIDEO

let videoBtn = document.querySelector('.js-video-btn'),
    video = document.querySelector('.js-video');
    
videoBtn.onclick = function () {
    video.play(); 
    this.classList.add('hide');
}

video.onclick = function () {
    if (this.paused) {
        this.play();
    } else {
        this.pause();
    }
}

video.addEventListener('ended', videoHandler, false);
function videoHandler() {
    videoBtn.classList.remove('hide')
}


// *Alternativ***

//first-button

// function readMorePersInf() {
// let mehr = document.getElementById('mehr-eins');
// let knopf = document.getElementById('knopf-eins');

//     mehr.style.display = mehr.style.display === 'none' ? 'inline' : 'none';
    

// knopf.innerHTML = mehr.style.display === 'none' ? '+ Personal Information' : '- Personal Information';
// }


//second-button 

// function readMoreBerufsErf() {
// let mehrTwo = document.getElementById('mehr-zwei');
// let knopfTwo = document.getElementById('knopf-zwei');

// mehrTwo.style.display = mehrTwo.style.display === 'none' ? 'inline' : 'none';
// knopfTwo.innerHTML = mehrTwo.style.display === 'none' ? '+ Berufserfahrung' : '- Berufserfahrung';
// }

//third-button

// function readMoreAusb() {
// let mehrThree = document.getElementById('mehr-drei');
// let knopfThree = document.getElementById('knopf-drei');

// mehrThree.style.display = mehrThree.style.display === 'none' ? 'inline' : 'none';
// knopfThree.innerHTML = mehrThree.style.display === 'none' ? '+ Ausbildung' : '- Ausbildung';
// }

//fourth-button

// function readMoreKennInt() {
// let mehrFourth = document.getElementById('mehr-vier');
// let knopfFourth = document.getElementById('knopf-vier');

// mehrFourth.style.display = mehrFourth.style.display === 'none' ? 'inline' : 'none';
// knopfFourth.innerHTML = mehrFourth.style.display === 'none' ? '+ Kenntnisse und interessen' : '- Kenntnisse und interessen';
// }