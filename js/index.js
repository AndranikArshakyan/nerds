let feedBackPopup = document.querySelector('.contact-us');
let modalOpen = document.querySelector('.modal');
let modalClose = feedBackPopup.querySelector('.modal-close-mark');
let form = document.querySelector('.contact-us-form');
let userName =  feedBackPopup.querySelector('[name=username]');


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
    evt.preventDefault();
});
