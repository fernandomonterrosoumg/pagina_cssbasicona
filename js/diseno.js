// Verificar si existe un elemento con la clase '.typed-text-output'
var typedTextOutput = document.querySelector('.typed-text-output');
if (typedTextOutput) {
    var typedStrings = document.querySelector('.typed-text').textContent.split(', ');
    var currentStringIndex = 0;
    var currentCharIndex = 0;
    var isDeleting = false;

    function typeText() {
        var currentString = typedStrings[currentStringIndex];
        if (isDeleting) {
            typedTextOutput.textContent = currentString.slice(0, currentCharIndex);
            currentCharIndex--;

            if (currentCharIndex < 0) {
                isDeleting = false;
                currentStringIndex = (currentStringIndex + 1) % typedStrings.length;
            }
        } else {
            typedTextOutput.textContent = currentString.slice(0, currentCharIndex);
            currentCharIndex++;

            if (currentCharIndex > currentString.length) {
                isDeleting = true;
            }
        }

        setTimeout(typeText, isDeleting ? 50 : 100);
    }

    // Iniciar la animación
    typeText();
}

const events = document.querySelectorAll('.event');
const windowHeight = window.innerHeight;

function animateEvents() {
    const scrollPosition = window.scrollY;

    events.forEach((event, index) => {
        const eventTop = event.getBoundingClientRect().top;

        if (eventTop < windowHeight - 50 && eventTop > windowHeight / 2) {
            event.classList.add('appear');
            event.style.transitionDelay = `${index * 0.2}s`;
        } else {
            event.classList.remove('appear');
            event.style.transitionDelay = '';
        }
    });
}

window.addEventListener('scroll', animateEvents);
window.addEventListener('resize', animateEvents);

// Iniciar la animación al cargar la página
animateEvents();


document.addEventListener('DOMContentLoaded', function() {
    const service = document.getElementById('service');
    let serviceShown = false;

    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY + window.innerHeight;
      const servicePosition = service.offsetTop + service.clientHeight / 2;

      if (scrollPosition > servicePosition && !serviceShown) {
        service.classList.add('show-service');
        serviceShown = true;
      } else if (scrollPosition <= servicePosition && serviceShown) {
        service.classList.remove('show-service');
        serviceShown = false;
      }
    });
  });