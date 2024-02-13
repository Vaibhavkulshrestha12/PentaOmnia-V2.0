let currentIndex = 0;

function changeImage(offset) {
    currentIndex += offset;

    const slider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.slider-image');
    const maxIndex = images.length - 1;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

document.addEventListener('DOMContentLoaded', function () {
    var videoModal = new bootstrap.Modal(document.getElementById('videoModal'));

    document.querySelector('.btn-play').addEventListener('click', function () {
        var videoSrc = this.getAttribute('data-src');
        document.getElementById('video').src = videoSrc;
        videoModal.show();
    });
});
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) { 
            $('.navbar').addClass('navbar-scrolled');
        } else {
            $('.navbar').removeClass('navbar-scrolled');
        }
    });
});
