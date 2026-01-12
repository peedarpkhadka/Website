let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("slides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 1].classList.add("fade");
        setTimeout(showSlides, 3000); // Change image every 3 seconds
    }
    function changeSlide(n) {
        let slides = document.getElementsByClassName("slides");
        slides[slideIndex - 1].style.display = "none"; // Hide current slide
        slideIndex += n;
        if (slideIndex > slides.length) { slideIndex = 1; }
        if (slideIndex < 1) { slideIndex = slides.length; }
        slides[slideIndex - 1].style.display = "block"; // Show new slide
    }