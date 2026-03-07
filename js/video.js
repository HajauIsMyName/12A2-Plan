const video1Modal = document.getElementById('video1Modal');
const video2Modal = document.getElementById('video2Modal');

const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');

video1Modal.addEventListener('shown.bs.modal', () => {
    video1.play();
});

video1Modal.addEventListener('hidden.bs.modal', () => {
    video1.pause();
    video1.currentTime = 0;
});

video2Modal.addEventListener('shown.bs.modal', () => {
    video2.play();
});

video2Modal.addEventListener('hidden.bs.modal', () => {
    video2.pause();
    video2.currentTime = 0;
});