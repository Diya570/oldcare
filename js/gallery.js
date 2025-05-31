// let scrollAmount = 0;
// const gallery = document.querySelector('.gallery');
// const galleryContainer = document.querySelector('.gallery-container');
// const images = document.querySelectorAll('.gallery img');

// // Dynamically calculate scroll step based on image width
// function calculateScrollStep() {
//     return images[0].offsetWidth; // Use the width of a single image
// }

// function slideRight() {
//     scrollAmount += calculateScrollStep();
//     const maxScroll = gallery.scrollWidth - galleryContainer.offsetWidth;
//     if (scrollAmount > maxScroll) scrollAmount = maxScroll;
//     gallery.style.transform = `translateX(-${scrollAmount}px)`;
// }

// function slideLeft() {
//     scrollAmount -= calculateScrollStep();
//     if (scrollAmount < 0) scrollAmount = 0;
//     gallery.style.transform = `translateX(-${scrollAmount}px)`;
// }

// // Adjust the scroll amount when the window resizes
// window.addEventListener('resize', () => {
//     scrollAmount = 0; 
//     gallery.style.transform = `translateX(${scrollAmount}px)`;
// });

// // Image hover effects
// images.forEach(img => {
//     img.addEventListener('mouseenter', () => {
//         images.forEach(i => i.classList.add('blur'));
//         img.classList.add('zoomed');
//         img.classList.remove('blur');
//     });
//     img.addEventListener('mouseleave', () => {
//         images.forEach(i => i.classList.remove('blur', 'zoomed'));
//     });
// });

// // Add event listeners for the left and right buttons
// document.querySelector('.button.left').addEventListener('click', slideLeft);
// document.querySelector('.button.right').addEventListener('click', slideRight);





let scrollAmount = 0;
        const gallery = document.querySelector('.gallery');
        const galleryContainer = document.querySelector('.gallery-container');
        const images = document.querySelectorAll('.gallery img');

        // Dynamically calculate scroll step based on gallery container width
        function calculateScrollStep() {
            return galleryContainer.offsetWidth;
        }

        function slideRight() {
            scrollAmount += calculateScrollStep();
            const maxScroll = gallery.scrollWidth - galleryContainer.offsetWidth;
            if (scrollAmount > maxScroll) scrollAmount = maxScroll;
            gallery.style.transform = `translateX(-${scrollAmount}px)`;
        }

        function slideLeft() {
            scrollAmount -= calculateScrollStep();
            if (scrollAmount < 0) scrollAmount = 0;
            gallery.style.transform = `translateX(-${scrollAmount}px)`;
        }

        // Adjust the scroll amount when the window resizes
        window.addEventListener('resize', () => {
            scrollAmount = 0; 
            gallery.style.transform = `translateX(${scrollAmount}px)`;
        });

        images.forEach(img => {
            img.addEventListener('mouseenter', () => {
                images.forEach(i => i.classList.add('blur'));
                img.classList.add('zoomed');
                img.classList.remove('blur');
            });
            img.addEventListener('mouseleave', () => {
                images.forEach(i => i.classList.remove('blur', 'zoomed'));
            });
        });