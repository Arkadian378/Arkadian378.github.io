function resize(img) {
    img.style.transform = 'scale(1.65)';

    setTimeout(function() {
        img.style.transform = 'scale(1.2)';
    }, 2000);

    caption.style.display = 'block';
}