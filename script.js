document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".slideshow img");
    let currentSlide = 0;

    function showSlide(index) {
        images[currentSlide].classList.remove("active");
        currentSlide = index;
        images[currentSlide].classList.add("active");
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % images.length;
        showSlide(nextIndex);
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + images.length) % images.length;
        showSlide(prevIndex);
    }

    setInterval(nextSlide, 5000); // Change image every 3 seconds
});

//About Us
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var leftContent = document.querySelector(".left-content");
        var rightContent = document.querySelector(".right-content");
        var section = document.querySelector(".section");

        var sectionPosition = section.getBoundingClientRect();
        var windowHeight = window.innerHeight;

        // Adjust the trigger point as needed
        var triggerPoint = windowHeight * 0.6;

        if (sectionPosition.top < triggerPoint && sectionPosition.bottom >= triggerPoint) {
            leftContent.style.transform = "translateX(0)";
            leftContent.style.opacity = 1;

            rightContent.style.transform = "translateX(0)";
            rightContent.style.opacity = 1;
        } else {
            leftContent.style.transform = "translateX(-100%)";
            leftContent.style.opacity = 0;

            rightContent.style.transform = "translateX(100%)";
            rightContent.style.opacity = 0;
        }
    });
});

//Sustainable Timber Sourcing Page
document.addEventListener("DOMContentLoaded", function () {
    // Add interactivity here

    // Example: Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});

