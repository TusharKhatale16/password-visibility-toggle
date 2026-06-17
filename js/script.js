const passwordInput = document.getElementById('passwordInput');
const toggleEye = document.getElementById('toggleEye');
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');

const icons = {
    show: 'img/view.png',
    hide: 'img/hide.png'
};

let passwordVisible = false;

toggleEye.addEventListener('click', () => {
    if (!passwordVisible) {
        passwordInput.type = 'text';
        toggleEye.src = icons.show;
        toggleEye.alt = 'Hide password';
        toggleEye.title = 'Hide password';
        passwordVisible = true;
    } else {
        passwordInput.type = 'password';
        toggleEye.src = icons.hide;
        toggleEye.alt = 'Show password';
        toggleEye.title = 'Show password';
        passwordVisible = false;
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert('Please enter both email and password.');
        return;
    }

    alert(`Login submitted for ${email}`);
});
