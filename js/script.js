const form = document.querySelector('.main-form');
const input = document.querySelector('.main-form input');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    window.alert(input.value);
});