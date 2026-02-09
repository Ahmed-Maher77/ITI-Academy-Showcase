// Active Link Highlighting
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const sections = document.querySelectorAll(
        "main section, main[id], footer[id]",
    );

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSection}`) {
                link.classList.add("active");
            }
        });
    });
});



// Page Loader and Scroll Animations
window.addEventListener("load", function () {
    const loader = document.getElementById("pageLoader");
    loader.classList.add("fade-out");

    setTimeout(() => {
        loader.style.display = "none";

        // Initialize scroll animations after loader is hidden
        const animateElements = document.querySelectorAll(
            ".animate-on-scroll, .fade-in-left, .fade-in-right, .scale-in",
        );

        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animated");
                }
            });
        }, observerOptions);

        animateElements.forEach((element) => {
            observer.observe(element);
        });
    }, 800);
});
