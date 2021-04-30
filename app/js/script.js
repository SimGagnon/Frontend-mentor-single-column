const email = document.getElementById("email");
const form = document.querySelector('form');



form.addEventListener('submit', function (e) {

    const emailValue = email.value;
    e.preventDefault();

    if (!validateEmail(emailValue)) {
        form.classList.add('error');
    } else {
        form.classList.remove('error');
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}