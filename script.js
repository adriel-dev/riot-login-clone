const loginBtn = document.getElementById('btn-login');
loginBtn.setAttribute('disabled', true);
loginBtn.addEventListener('click', () => {
    console.log('click');
});

const usernameInput = document.getElementById('username-input');
usernameInput.addEventListener('keyup', () => {
    if(checkInputs()){
        loginBtn.classList.remove('disabled');
        loginBtn.removeAttribute('disabled');
    }else{
        loginBtn.classList.add('disabled');
        loginBtn.setAttribute('disabled', true);
    }
});

const passwordInput = document.getElementById('password-input');
passwordInput.addEventListener('keyup', () => {
    if(checkInputs()){
        loginBtn.classList.remove('disabled');
        loginBtn.removeAttribute('disabled');
    }else{
        loginBtn.classList.add('disabled');
        loginBtn.setAttribute('disabled', true);
    }
});

const eyeIcon = document.getElementById('eye');
eyeIcon.addEventListener('mousedown', (e) => {
    e.preventDefault();
});
eyeIcon.addEventListener('click', () => {
    if(passwordInput.dataset.vision == 'false'){
        passwordInput.dataset.vision = true;
        passwordInput.setAttribute('type', 'text');
        eyeIcon.setAttribute('src', '/assets/img/eye.svg');
    }else{
        passwordInput.dataset.vision = false;
        passwordInput.setAttribute('type', 'password');
        eyeIcon.setAttribute('src', '/assets/img/eye-slash.svg');
    }
});

const usernamePlaceholder = document.getElementById('custom-username');
const passwordPlaceholder = document.getElementById('custom-password');

passwordInput.addEventListener('focus', () => {
    eyeIcon.style.visibility =  'visible';
    passwordPlaceholder.classList.add('placeholder-top');
});
passwordInput.addEventListener('blur', () => {
    eyeIcon.style.visibility = 'hidden';
    if(passwordInput.value === ''){
        passwordPlaceholder.classList.remove('placeholder-top');
    }
});

usernameInput.addEventListener('focus', () => {
    usernamePlaceholder.classList.add('placeholder-top');
});
usernameInput.addEventListener('blur', () => {
    if(usernameInput.value === ''){
        usernamePlaceholder.classList.remove('placeholder-top');
    }
});

function checkInputs() {
    let checkUser;
    let checkPass; 
    if(usernameInput.value !== ''){
        checkUser = true;
    }else{
        checkUser = false;
    }

    if(passwordInput.value !== ''){
        checkPass = true;
    }else{
        checkPass = false;
    }

    return checkUser && checkPass;
}