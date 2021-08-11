let signUp = document.querySelector('.signup')
let termCond = document.querySelector('#remember')
let password = document.querySelector('#password')
let confirmPassword = document.querySelector('#confirmPassword')
const passwordPattern = /^[a-zA-Z0-9]{8,15}$/;

password.addEventListener('keyup', event => {
    if (passwordPattern.test(password.value)) {
        password.style.borderColor = 'green'
    } else {
        password.style.borderColor = 'Red'
    }
})
password.addEventListener('focusout', event => {
    if (passwordPattern.test(password.value)) {
        password.style.borderColor = '#e1dede69'
    } else {
        password.style.borderColor = 'Red'
    }
})

confirmPassword.addEventListener(['keyup'], event => {
    if (passwordPattern.test(password.value) && password.value === confirmPassword.value) {
        confirmPassword.style.borderColor = 'green'
    } else {
        confirmPassword.style.borderColor = 'Red'
    }
})
confirmPassword.addEventListener('focusout', event => {
    if (passwordPattern.test(confirmPassword.value)) {
        confirmPassword.style.borderColor = '#e1dede69'
    } else {
        confirmPassword.style.borderColor = 'Red'
    }
})

termCond.addEventListener('change', () => {
    if (termCond.checked === true) {
        signUp.disabled = false;
    } else if (termCond.checked === false) {
        signUp.disabled = true;
    }
})
