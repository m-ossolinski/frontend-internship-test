/* Here goes your JS code */

/* Reuseable DOM elements object*/
const DOMelements = {
    clickMe: '#show-popup-form',
    loginModal: '.login-modal',
    exitModal: '.exit-button'
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



