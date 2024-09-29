const idInput = document.getElementById('id-input')
const pwInput = document.getElementById('password-input')
const loginBtn = document.getElementById('login-btn')

function checkInputs() {
    if (idInput.value.trim() !== "" && pwInput.value.trim() !== "") {
        loginBtn.disabled = false
    } else {
        loginBtn.disabled = true
    }
}

idInput.addEventListener('input', checkInputs)
pwInput.addEventListener('input', checkInputs)

const loader = document.querySelector('.loader');
const loginText = document.querySelector('.login-text');
const headingFormDiv = document.querySelector('.heading-form-div')
const footerDiv = document.querySelector('.footer-div')
const enrollDiv = document.querySelector('.lg-enroll-btn-div')
const title = document.querySelector('.title')
const imgDiv = document.querySelector('.img-div')
const logo = document.querySelector('.lg-logo')

loginBtn.addEventListener('click', function () {
    loader.style.opacity = 1
    loader.style.left = '47%'
    loginText.style.left = '60%';
    loginText.style.opacity = '0';
    idInput.disabled = true
    pwInput.disabled = true

    headingFormDiv.classList.add('heading-form-animation')
    footerDiv.classList.add('footer-animation')
    enrollDiv.classList.add('enroll-btn-div-animation')
    title.classList.add('title-animation')
    imgDiv.classList.add('img-animation')
    logo.classList.add('logo-animation')

    setTimeout(() => {
        loader.style.opacity = 0
        loader.style.left = '-5%';
        loginText.style.left = '0';
        loginText.style.opacity = '1';
        idInput.disabled = false
        pwInput.disabled = false
    }, 2500);

    setTimeout(() => {
        location.reload()
    }, 5500);
});

