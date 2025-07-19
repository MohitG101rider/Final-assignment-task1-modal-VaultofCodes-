const modal = document.getElementById('infoModal');
const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', () => {
modal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
if (e.target === modal) {
    modal.style.display = 'none';
}
});