document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('memory-slider');
    const showMemoriesButton = document.getElementById('show-memories');
    const slides = slider.getElementsByClassName('slide');
    let currentSlide = 0;

    // Show the slider when the button is clicked
    showMemoriesButton.addEventListener('click', () => {
        slider.style.display = slider.style.display === 'block' ? 'none' : 'block';
        if (slider.style.display === 'block') {
            showSlide(currentSlide);
        }
    });

    // Show a specific slide
    function showSlide(index) {
        if (index >= slides.length) currentSlide = 0;
        if (index < 0) currentSlide = slides.length - 1;

        for (let slide of slides) {
            slide.style.display = 'none';
        }

        slides[currentSlide].style.display = 'block';
    }

    // Navigate slides
    document.getElementById('prev').addEventListener('click', () => {
        showSlide(--currentSlide);
    });

    document.getElementById('next').addEventListener('click', () => {
        showSlide(++currentSlide);
    });
});
