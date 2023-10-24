/*CARRUSEEEEEEEEEEEEEEEEEEELLELLE*/
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const images = document.querySelectorAll('.carousel img');

let ImageIndex = 0;
let automaticSlideInterval; // variable para hacerlo automatico 

function showImage(index) {
    images.forEach((image, i) => {
        if (i === index) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    ImageIndex = (ImageIndex + 1) % images.length;
    showImage(ImageIndex);
}

function prevImage() {
    ImageIndex = (ImageIndex - 1 + images.length) % images.length;
    showImage(ImageIndex);
}

prevBtn.addEventListener('click', () => {
    prevImage();
    clearInterval(automaticSlideInterval); // Para las img al hacer click en las flechas
});

nextBtn.addEventListener('click', () => {
    nextImage();
    clearInterval(automaticSlideInterval);
});

// Función para cambiar automáticamente las imágenes cada 2 segundos
function startAutomaticSlide() {
    automaticSlideInterval = setInterval(() => {
        nextImage();
    }, 2000);
}
showImage(ImageIndex);
startAutomaticSlide();

/*FORRRRRRRRRRMULARIO*/
const form = document.getElementById('myForm');
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const comments = document.getElementById('comments');
const warnings = document.getElementById('warnings');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Reset error messages and styles
    warnings.innerHTML = '';
    fullName.classList.remove('error');
    email.classList.remove('error');
    phoneNumber.classList.remove('error');
    comments.classList.remove('error');

    // Validate Full Name
    if (fullName.value.trim() === '') {
        warnings.innerHTML += 'Full Name is required.<br>';
        fullName.classList.add('error');
    }

    // Validate Email
    if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
        warnings.innerHTML += 'Please enter a valid Email.<br>';
        email.classList.add('error');
    }

    // Validate Phone Number (if provided)
    if (phoneNumber.value.trim() !== '' && !/^[1-9][0-9]{9}$/.test(phoneNumber.value)) {
        warnings.innerHTML += 'Phone Number should be 10 numeric digits and not start with 0.<br>';
        phoneNumber.classList.add('error');
    }

    // Validate Comments
    if (comments.value.trim() === '') {
        warnings.innerHTML += 'Comments are required.<br>';
        comments.classList.add('error');
    }

    if (warnings.innerHTML === '') {
        // Form is valid; you can handle the form submission here
        confirmationMessage.style.display = 'block';
        form.reset();
    }
});
/*La función validateEmail(email) utiliza (/\S+@\S+\.\S+/)
para verificar si la cadena email tiene un formato válido de dirección de correo electronico.
Busca una cadena que comience con uno o más caracteres que no sean espacios en blanco
seguidos por @ y más caracteres que no sean espacios en blanco, seguidos por un punto .
y por ultimo uno o más caracteres que no sean espacios en blanco.  */