$(document).ready(function() {
    function typeWriter($element, phrases, options = {}) {
        let state = {
            currentPhrase: 0,
            text: '',
            letterIndex: 0,
            isDeleting: false
        };

        const settings = $.extend({
            typeSpeed: 80,
            deleteSpeed: 50,
            pauseTime: 2000
        }, options);

        function type() {
            const currentText = phrases[state.currentPhrase];

            if (state.isDeleting) {
                state.text = currentText.substring(0, state.letterIndex - 1);
                state.letterIndex--;
            } else {
                state.text = currentText.substring(0, state.letterIndex + 1);
                state.letterIndex++;
            }

            $element.text(state.text);

            let typeSpeed = state.isDeleting ? settings.deleteSpeed : settings.typeSpeed;

            if (!state.isDeleting && state.letterIndex === currentText.length) {
                typeSpeed = settings.pauseTime;
                state.isDeleting = true;
            } else if (state.isDeleting && state.letterIndex === 0) {
                state.isDeleting = false;
                state.currentPhrase++;
                if (state.currentPhrase === phrases.length) {
                    state.currentPhrase = 0;
                }
                typeSpeed = 500;
            }

            setTimeout(type, typeSpeed);
        }

        type();
    }

    const phrases = [
        "I am Gareth Glendiuz Yauwira",
        "I am a Full Stack Web Developer",
        "I am a Shopify App Developer",
        "I am a Cybersecurity Practionioner"
    ];

    const options = {
        typeSpeed: 80,
        deleteSpeed: 50,
        pauseTime: 3000
    };

    typeWriter($('.changeHeader'), phrases, options);
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    // Remove active class from all links
    $('a[href^="#"]').removeClass('active');
    
    // Add active class to clicked link
    $(this).addClass('active');

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});