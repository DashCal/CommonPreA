document.addEventListener("DOMContentLoaded", function () {
    const imageElement = document.getElementById('responsive-image');
    const breakpoints = {
        'phone': 576,
        'tablet': 768,
        'laptop': 1024,
        'desktop': 1440
    };

    const imageSrcs = {
        'phone': 'images/phone.png',
        'tablet': 'images/tablet.png',
        'laptop': 'images/laptop.png',
        'desktop': 'images/desktop.png',
        'ultrawide': 'images/ultrawide.png'
    };

    function updateImage() {
        const screenWidth = window.innerWidth;
        let screenSize;

        if (screenWidth < breakpoints.phone) {
            screenSize = 'phone';
        } else if (screenWidth < breakpoints.tablet) {
            screenSize = 'tablet';
        } else if (screenWidth < breakpoints.laptop) {
            screenSize = 'laptop';
        } else if (screenWidth < 2560) { // Example threshold for ultrawide, adjust as needed  
            screenSize = 'desktop';
        } else {
            screenSize = 'ultrawide';
        }

        imageElement.src = imageSrcs[screenSize];
    }

    updateImage(); // Initial call to set the image  

    // Function to update image on window resize  
    window.addEventListener('resize', updateImage);
});