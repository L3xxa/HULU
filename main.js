const loginBtn = document.querySelector('.login-btn');
const modal = document.getElementById('registerModal');
const closeModal = document.getElementById('closeModal');

// Відкрити модальне вікно
loginBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

// Закрити модальне вікно
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закриття при кліку поза модальним вікном
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});