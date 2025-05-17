    document.addEventListener("DOMContentLoaded", function () {
    // Dropdown menu functionality
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    dropdownBtn.addEventListener("click", function () {
        dropdownContent.classList.toggle("show");
    });

    window.addEventListener("click", function (event) {
        if (!event.target.matches(".dropbtn")) {
            if (dropdownContent.classList.contains("show")) {
                dropdownContent.classList.remove("show");
            }
        }
    });

    // Product Slider functionality
    const sliderContainer = document.querySelector(".slider-container-home");
    let scrollAmount = 0;

    function autoSlide() {
        if (scrollAmount < sliderContainer.scrollWidth - sliderContainer.clientWidth) {
            scrollAmount += 300;
        } else {
            scrollAmount = 0;
        }
        sliderContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
        });
    }

    setInterval(autoSlide, 3000);

    // Buy button alert
    const buyButtons = document.querySelectorAll(".buy-btn");
    buyButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            alert("Redirecting to purchase...");
        });
    });
});
