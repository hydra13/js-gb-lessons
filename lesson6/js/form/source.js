'usee strict'

function checkName(element) {
    return element.value.length >= 1 && element.value.length <= 50;
}

function checkPassword(element) {
    return element.value.length >= 5 && element.value.length <= 50;
}

function checkPassordConfirm(passElement, passConfirmElement) {
    return passElement.value === passConfirmElement.value;
}

function changeStateError(element, msgClassName) {
    if (!element.classList.contains('is-danger')) {
        element.classList.add('is-danger');
    }
    let msg = document.querySelector(msgClassName);
    if (msg.classList.contains('is-hidden')) {
        msg.classList.remove('is-hidden');
    }
}

function changeStateNormal(element, msgClassName) {
    if (element.classList.contains('is-danger')) {
        element.classList.remove('is-danger');
    }
    let msg = document.querySelector(msgClassName);
    if (!msg.classList.contains('is-hidden')) {
        msg.classList.add('is-hidden');
    }
}

function validate() {
    let state = true;
    let nameElement = document.querySelector('.field-login');
    let passElement = document.querySelector('.field-pass');
    let passConfirmElement = document.querySelector('.field-pass-confirm');

    if (!checkName(nameElement)) {
        changeStateError(nameElement, '.login-error-msg');
        state = false;
    } else {
        changeStateNormal(nameElement, '.login-error-msg');
    }

    if (!checkPassword(passElement)) {
        changeStateError(passElement, '.pass-error-msg');
        state = false;
    } else {
        changeStateNormal(passElement, '.pass-error-msg');
    }

    if (!checkPassordConfirm(passElement, passConfirmElement)) {
        changeStateError(passConfirmElement, '.pass-confirm-error-msg');
        state = false;
    } else {
        changeStateNormal(passConfirmElement, '.pass-confirm-error-msg');
    }
    console.log(state);
    return state;
}