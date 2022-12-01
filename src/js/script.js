
export function passwordFunction () {
    const passEye = document.querySelectorAll('.forms-popup__eye');

    passEye.forEach((button) => {
        button.addEventListener('click', ({target}) => {
            const passInput = document.querySelectorAll('.forms-popup__input_2');
            const isClose = target.classList.contains('icon-Closed-Eye')


            for (const input of passInput) {
                if (isClose) {
                    input.setAttribute('type', 'password');
                } else {
                    input.setAttribute('type', 'text');
                }
            }

            for (const eye of passEye) {
                if (isClose) {
                    eye.classList.toggle('icon-Eye');
                    eye.classList.remove('icon-Closed-Eye');
                } else {
                    eye.classList.toggle('icon-Closed-Eye');
                    eye.classList.remove('icon-Eye');
                }
            }
        })
    })
}

export function validationFunc () {
    const form = document.querySelectorAll('.js-form');
    const formInputs = document.querySelectorAll('.js-input');
    const formPass = document.querySelectorAll('.forms-popup__password');

    const popupClose = document.querySelectorAll('.popup__close');
    const formName = document.querySelectorAll('.name');
    const formSmall = document.querySelector('.forms-popup__name');
    const pass1 = document.getElementById('pass1');
    const pass2 = document.getElementById('pass2');
    const formBtn = document.querySelector('.js-form-btn');
    const popupLink = document.querySelectorAll('.popup__link');
        form.forEach((formItem) => {
            formItem.onsubmit = function () {    
                        formInputs.forEach((input) => {
                            if (input.value.length <= 0) {
                                input.classList.add('_error');
                            } else {
                                input.classList.remove('_error');
                            }
                            popupClose.forEach((target) => {
                                target.addEventListener('click', () => {
                                    input.classList.remove('_error');
                                    
                                })
                            })
                            formName.forEach((names) => {
                                if (names.value.length < 3) {
                                    formSmall.classList.add('_name-active');
                                    formSmall.textContent = "Please enter more than 3 characters";
                                    
                                } else if(names.value.length > 15)   {
                                    formSmall.classList.add('_name-active');
                                    formSmall.textContent = "Please enter less than 15 characters";
                                } else {
                                    formSmall.classList.remove('_name-active');
                                }
                            })
                            const formSmallPass = document.querySelector('.forms-popup__small-pass');
                            if (pass1.value === pass2.value) {
                                formSmallPass.classList.add('_name-active_suc');
                                formSmallPass.textContent = "The passwords match!";
                            } else {
                                formSmallPass.classList.add('_name-active');
                                formSmallPass.textContent = "The passwords do not match!";
                            }
                            popupLink.forEach((link) => {
                                link.addEventListener('click', () => {
                                    input.classList.remove('_error');
                                    formSmall.classList.remove('_name-active'); 
                                    formSmallPass.classList.remove('_name-active');
                                    formSmallPass.classList.remove('_name-active_suc');
                                })
                            })
                        })
                        formPass.forEach((formPassItem) => {
                            if(formPassItem.childNodes[1].classList.contains('_error')) {
                                formPassItem.classList.add('_error');
                                
                            } else {
                                formPassItem.classList.remove('_error');
                                
                            }
                        })
                return false;   
            }
        })
}

export function btnColor () {
    const btn = document.querySelectorAll('.card-course__button');
    btn.forEach((item) => {
        if (item.textContent == 'Management') {
            item.style.background = '#5A87FC';
        } 
        if (item.textContent == 'HR & Recruting') {
            item.style.background = '#F89828';
        }
        if (item.textContent == 'Marketing') {
            item.style.background = '#03CEA4';
        }
        if (item.textContent == 'Design') {
            item.style.background = '#F52F6E';
        }
    })
}








