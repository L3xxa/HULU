
const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('registerModal');
const closeModal = document.getElementById('closeModal');

loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const registerModal = document.querySelector('#registerModal');
    const registerBtn = document.querySelector('.register-btn');
    const startFreeTrialBtn = document.querySelector('.btn-cta');
    const closeBtns = document.querySelectorAll('.close');

    // Open register modal on "Register" button click
    if (registerBtn) {
        registerBtn.addEventListener('click', function () {
            registerModal.style.display = 'block';
        });
    }

    // Open register modal on "Start Your Free Trial" button click
    if (startFreeTrialBtn) {
        startFreeTrialBtn.addEventListener('click', function () {
            registerModal.style.display = 'block';
        });
    }

    // Close modals
    closeBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            btn.closest('.modal').style.display = 'none';
        });
    });

    // Close modal when clicking outside of the modal box
    window.addEventListener('click', function (event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
        }
    });
});