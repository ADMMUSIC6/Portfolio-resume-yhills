
const themeToggle = document.getElementById('theme-toggle');
const adminLoginSection = document.getElementById('admin-login');
const userResponsesSection = document.getElementById('user-responses');
const adminForm = document.getElementById('admin-form');
const contactForm = document.getElementById('contact-form');
const responsesList = document.getElementById('responses-list');

let isAdminLoggedIn = false;

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

adminForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const adminPassword = document.getElementById('admin-password').value;
    if (adminPassword === 'admin123') {
        isAdminLoggedIn = true;
        adminLoginSection.classList.add('hidden');
        userResponsesSection.classList.remove('hidden');
        showUserResponses();
    }
});

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const response = {
        name,
        email,
        message,
        timestamp: new Date().toLocaleString(),
    };
    storeResponse(response);
    contactForm.reset();
});

function storeResponse(response) {
    const responses = getResponses();
    responses.push(response);
    localStorage.setItem('responses', JSON.stringify(responses));
}

function get() {
    const responses = localStorage.getItem('responses');
    return responses ? JSON.parse(responses) : [];
}
