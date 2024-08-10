document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showSlide(index) {
        items[currentIndex].classList.remove('active');
        items[index].classList.add('active');
        currentIndex = index;
    }

    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function () {
            let targetId = this.getAttribute('href').substring(1);
            let targetIndex = Array.from(items).findIndex(item => item.id === targetId);
            showSlide(targetIndex);
        });
    });

    showSlide(currentIndex);
});