// Modal pour agrandir l'image
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const images = document.querySelectorAll('.gallery-img');
const closeBtn = document.getElementById('close');

images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});