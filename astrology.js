let slideIndex = 0;
        const slides = document.querySelectorAll('.slide');
        const totalSlides = slides.length;

        function showSlides() {
            slides.forEach((slide, index) => {
                slide.style.display = (index === slideIndex) ? 'block' : 'none';
            });
        }

        function plusSlides(n) {
            slideIndex = (slideIndex + n + totalSlides) % totalSlides;
            showSlides();
        }

        function autoSlide() {
            plusSlides(1);
        }

        // Initial display
        showSlides();

        // Auto slide every 5 seconds
        setInterval(autoSlide, 5000);