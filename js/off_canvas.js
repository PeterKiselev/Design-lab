function toggleOffCanvas(e) {
    e.preventDefault();
    document.body.classList.toggle('opened-off-canvas');
}

function closeOffCanvas() {
    document.body.classList.remove('opened-off-canvas');
}