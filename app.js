/*CARRUSEEEEEEEEEEEEEEEEEEELLELLE*/
var i = 0;
var img = document.getElementById("img");
var array = ["img/pelicula4slider.jpg", "img/pelicula2slider.jpg", "img/pelicula3slider.jpg"];
var intervalId;

function next() {
    if (i === array.length - 1) {
        i = 0;
    } else {
        i++;
    }
    img.src = array[i];
}

function back() {
    if (i === 0) {
        i = array.length - 1;
    } else {
        i--;
    }
    img.src = array[i];
}

function startAutoSlide() {
    // Pasa las imagenes cada 2 segundos
    intervalId = setInterval(next, 2000);
}

startAutoSlide();

/*FORRRRRRRRRRMULARIO*/
const fullName = document.getElementById('fullName');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phoneNumber');
const comments = document.getElementById('comments');
const form = document.getElementById('myForm');
const errorElement = document.getElementById('error');
const confirmationMessage = document.getElementById('confirmationMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();

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
        errorElement.innerHTML = messages.join('<br>');
        confirmationMessage.style.display = 'none';
    } else {
        // Si no hay errores, muestra los datos enviados
        errorElement.innerHTML = '';
        displaySubmittedData();
    }
});

function displaySubmittedData() {
    // Obtener los valores de los campos
    const submittedFullName = fullName.value;
    const submittedEmail = email.value;
    const submittedPhoneNumber = phoneNumber.value;
    const submittedComments = comments.value;

    // Crear elementos HTML para mostrar los datos
    const fullNameElement = document.createElement('p');
    fullNameElement.textContent = `Full Name: ${submittedFullName}`;

    const emailElement = document.createElement('p');
    emailElement.textContent = `Email: ${submittedEmail}`;

    const phoneNumberElement = document.createElement('p');
    phoneNumberElement.textContent = `Phone Number: ${submittedPhoneNumber}`;

    const commentsElement = document.createElement('p');
    commentsElement.textContent = `Comments: ${submittedComments}`;

    // Agregar los elementos al div de confirmación
    confirmationMessage.innerHTML = '';
    confirmationMessage.appendChild(fullNameElement);
    confirmationMessage.appendChild(emailElement);
    confirmationMessage.appendChild(phoneNumberElement);
    confirmationMessage.appendChild(commentsElement);

    confirmationMessage.style.display = 'block';
}





