const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-img');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;
const totalImages = images.length;

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateGallery();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1;
    }
    updateGallery();
});

function updateGallery() {
    const offset = -currentIndex * 100;
    gallery.style.transform = `translateX(${offset}%)`;
}
