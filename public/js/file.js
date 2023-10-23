

function hideAllImages() {
    const images = document.querySelectorAll('.content > div');
    images.forEach(image => {
        image.style.display = 'none';
    });
}

function showImage(id) {
    hideAllImages();
    document.getElementById(id).style.display = 'block';
    document.getElementById('message').style.display = 'none';
}

function showNoSelectionMessage() {
    document.getElementById('message').style.display = 'block';
}

window.onload = hideAllImages;
