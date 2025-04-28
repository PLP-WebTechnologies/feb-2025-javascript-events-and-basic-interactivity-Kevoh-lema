// 1. Button Click Event
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
    magicButton.textContent = "You clicked me!";
    magicButton.style.backgroundColor = "gold";
    magicButton.style.animation = "pop 0.5s";
});

// 2. Hover Effect
magicButton.addEventListener('mouseover', () => {
    magicButton.style.backgroundColor = "lightgreen";
});
magicButton.addEventListener('mouseout', () => {
    magicButton.style.backgroundColor = "";
});

// 3. Keypress Detection
document.addEventListener('keypress', (e) => {
    alert(`You pressed the key: ${e.key}`);
});

// 4. Bonus: Double-click
magicButton.addEventListener('dblclick', () => {
    alert("🔮 Secret Action: You double-clicked!");
});

// 5. Image Gallery Logic
const images = [
    "https://via.placeholder.com/300/ff7f7f",
    "https://via.placeholder.com/300/7f7fff",
    "https://via.placeholder.com/300/7fff7f"
];
let currentImage = 0;
const galleryImage = document.getElementById('galleryImage');
const nextImage = document.getElementById('nextImage');

nextImage.addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    galleryImage.src = images[currentImage];
});

// 6. Tabs Logic
const tabs = document.querySelectorAll('.tablink');
const contents = document.querySelectorAll('.tabcontent');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        contents.forEach(content => content.style.display = 'none');
        tabs.forEach(btn => btn.classList.remove('active'));

        const target = document.getElementById(tab.dataset.tab);
        target.style.display = 'block';
        tab.classList.add('active');
    });
});

// 7. Form Validation
const form = document.getElementById('myForm');
const message = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent form from submitting

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!name || !email || !password) {
        message.textContent = "Please fill all fields.";
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = "Please enter a valid email.";
        return;
    }

    if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        return;
    }

    message.style.color = "green";
    message.textContent = "Form submitted successfully!";
});

// Email format validation
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Real-time feedback
document.getElementById('email').addEventListener('input', function() {
    if (!validateEmail(this.value)) {
        message.textContent = "Invalid email format.";
    } else {
        message.textContent = "";
    }
});
