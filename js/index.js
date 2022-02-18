let feedBackPopup = document.querySelector('.contact-us');
let modalOpen = document.querySelector('.modal');
let modalClose = feedBackPopup.querySelector('.modal-close-mark');
let form = document.querySelector('.contact-us-form');

let userName =  feedBackPopup.querySelector('[name=username]');
let email =  feedBackPopup.querySelector('[name=email]');
let userMessage =  feedBackPopup.querySelector('[name=message]');

let sliderControls = document.querySelectorAll('.slider-controls button');
let sliderItems = document.querySelectorAll('.slider-item');

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener('click', function () {
    for (let j = 0; j < sliderControls.length; j++) {
      sliderControls[j].classList.remove('button-current');
      sliderControls[i].classList.add('button-current');
      sliderItems[j].classList.remove('slider-current');
      sliderItems[i].classList.add('slider-current');
    }
  });
}


modalOpen.addEventListener('click', function (evt) {
    evt.preventDefault();
    feedBackPopup.classList.add('modal-open');
    userName.focus();
});

modalClose.addEventListener('click', function (evt) {
    feedBackPopup.classList.remove('modal-open');
});

window.addEventListener('keydown', function (evt) {
    if (evt.keyCode==27) {
        if (feedBackPopup.classList.contains('modal-open')) {
            feedBackPopup.classList.remove('modal-open');
        }
    }
});

form.addEventListener('submit', function (evt) {
  if (!email.value || !userMessage.value || !userName.value) {
    evt.preventDefault();
    alert('Все поля должны быть заполнены');
  };
});


