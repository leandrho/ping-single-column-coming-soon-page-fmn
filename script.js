const isValidEmail = (email) => {
    const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexp.test(email);
}

const form = document.querySelector('.form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const input = document.querySelector('.input');
    const errMsg = document.querySelector('.error-message');
    if(!isValidEmail(input.value)){
        input.classList.add('border-error');
        errMsg.classList.remove('noerror');
    }else{
        input.classList.remove('border-error');
        errMsg.classList.add('noerror');
    }

});