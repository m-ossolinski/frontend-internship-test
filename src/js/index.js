/* Here goes your JS code */

/* Reuseable DOM elements object*/
const DOMelements = {
    clickMe: '#show-popup-form',
    loginModal: '.login-modal',
    exitModal: '.exit-button',
    emailInput: '.email-input',
    submitBtn: '.submit-form',
    loginForm: '.login-form',
    passwordForm: '.password-input',
    checkbox: '.agree-checkbox',
    showThankYou: '.show-ty'
}

/*Show login modal function and selector*/
document.querySelector(DOMelements.clickMe).addEventListener('click', showModal);

function showModal() {
    document.querySelector(DOMelements.loginModal).style.display = 'flex';
}


/*Hide login modal function and selector*/
document.querySelector(DOMelements.exitModal).addEventListener('click', hideModal);

function hideModal() {
    document.querySelector(DOMelements.loginModal).style.display = 'none';
}


/* Email validation, modal hiding and display 'Thank you'*/

function formValidation() {
    document.querySelector(DOMelements.submitBtn).addEventListener('click', function (e) {
        e.preventDefault();

        const email = document.querySelector(DOMelements.emailInput).value;
        const password = document.querySelector(DOMelements.passwordForm).value;
        const checkbox = document.querySelector(DOMelements.checkbox);
        const delay = 3000;

        const validator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email.match(validator) && password.length > 5 && checkbox.checked) {
            setTimeout(() => {
                hideModal();
                displayThankYou();
                clearInputs();
            }, delay);
        } else if(!email.match(validator)) {
            alert('Your e-mail should look like jonn@doe.com');
        } else if(password.length > 5 == false) {
            alert('Your password should contain more than than 5 letters')
        } else if(!checkbox.checked){
            alert('Please accept terms & conditions');
        }
    });
}

formValidation();

/* display 'Thank you!' function */
function displayThankYou() {
    document.querySelector(DOMelements.clickMe).style.display = 'none';
    document.querySelector(DOMelements.showThankYou).style.display = 'flex';
};



/* also back to 'Click me' insead of 'Thank you!' */
document.querySelector(DOMelements.showThankYou).addEventListener('click', function () {
    document.querySelector(DOMelements.clickMe).style.display = 'flex';
    document.querySelector(DOMelements.showThankYou).style.display = 'none';
});


/* clear inputs function */
function clearInputs() {
    document.querySelector(DOMelements.emailInput).value = '';
    document.querySelector(DOMelements.passwordInput).value = '';
    document.querySelector(DOMelements.checkbox).checked = false;
}