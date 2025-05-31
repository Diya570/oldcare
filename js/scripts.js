document.addEventListener('DOMContentLoaded', function() {
    
const animateElements = document.querySelectorAll('.animate-on-scroll');

function handleScroll() {
  // Loop through each element
  animateElements.forEach((el) => {
    const rect = el.getBoundingClientRect(); // Get the position of the element relative to the viewport
    
    // Check if the element is in view: 
    // - `rect.top` should be less than 80% of the viewport height (indicating it is in the view),
    // - `rect.bottom` should be greater than 0 (indicating it hasn't completely left the viewport).
    if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
      el.classList.add('enter-view'); // Add the `enter-view` class to trigger the CSS animation
    } else {
      el.classList.remove('enter-view'); // Remove the class if the element goes out of view
    }
  });
}

// Add `handleScroll` function as an event listener for the `scroll` event
window.addEventListener('scroll', handleScroll);

// Call `handleScroll` once on page load to ensure elements in view are animated immediately
window.addEventListener('load', handleScroll);



    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }

    // Initialize Google Maps
    function initMap() {
        const mapElement = document.getElementById('map');
        if (mapElement) {
            const map = new google.maps.Map(mapElement, {
                center: { lat: 40.7128, lng: -74.0060 },
                zoom: 15
            });
            new google.maps.Marker({
                position: { lat: 40.7128, lng: -74.0060 },
                map: map,
                title: 'OldCare'
            });
        }
    }


    // Lightbox functionality for gallery
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    if (galleryItems.length && lightbox) {
        galleryItems.forEach(item => {
            item.addEventListener('click', function() {
                const imgSrc = this.src;
                const caption = this.getAttribute('data-caption');
                const lightboxImg = lightbox.querySelector('img');
                lightboxImg.src = imgSrc;
                lightboxImg.alt = caption;
                lightbox.style.display = 'flex';
            });
        });

        lightbox.addEventListener('click', function() {
            this.style.display = 'none';
        });
    }
});

// Google Maps callback function
function initMap() {
    // This function will be called when the Google Maps API is loaded
}
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll
    });
};