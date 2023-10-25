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
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const comments = document.getElementById('comments');
const form = document.getElementById('myForm');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let messages = [];
  
    if (fullName.value.trim() === '') {
        messages.push('Full Name is required');
        fullName.classList.add('error');
    } else {
        fullName.classList.remove('error');
    }
  
    if (email.value.trim() === '' || !/^\S+@\S+\.\S+$/.test(email.value)) {
        messages.push('Please enter a valid Email');
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }
  
    if (phoneNumber.value.trim() === '') {
        messages.push('Phone Number is required');
        phoneNumber.classList.add('error');
    } else {
        phoneNumber.classList.remove('error');
    }
  
    if (comments.value.trim() === '') {
        messages.push('Comments are required');
        comments.classList.add('error');
    } else {
        comments.classList.remove('error');
    }
  
    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerHTML = messages.join('<br>');
    } else {
        errorElement.innerHTML = '';
    }
});
