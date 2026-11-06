document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.masonry-grid');

    if (!grid || typeof Masonry === 'undefined' || typeof imagesLoaded === 'undefined') {
        return;
    }

    const masonry = new Masonry(grid, {
        itemSelector: '.gallery-item',
        columnWidth: '.masonry-sizer',
        gutter: 16,
        percentPosition: true,
        transitionDuration: '0.25s'
    });

    // Recalculate after every image has its natural dimensions.
    imagesLoaded(grid, () => masonry.layout());
});
