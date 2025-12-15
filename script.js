let isMenuOpen = false;

/* Mobile Menu */
function toggleMobileMenu() {
    const menu = document.getElementById("mobileMenu");
    isMenuOpen = !isMenuOpen;
    menu.classList.toggle("active");
}

/* Smooth Scroll */
function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        if (isMenuOpen) toggleMobileMenu();
    }
}

/* Navbar Scroll Effect */
window.addEventListener("scroll", () => {
    document.getElementById("navbar")
        .classList.toggle("scrolled", window.scrollY > 50);
});

/* Modal Controls */
function openModal(id) {
    document.getElementById(id).classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    document.getElementById(id).classList.remove("active");
    document.body.style.overflow = "auto";
}

/* Dropdown */
function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const toggle = dropdown.previousElementSibling;
    dropdown.classList.toggle("active");
    toggle.classList.toggle("active");
}

/* Close modal on outside click */
window.addEventListener("click", e => {
    if (e.target.classList.contains("modal")) {
        e.target.classList.remove("active");
        document.body.style.overflow = "auto";
    }
});

/* Forms */
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("form").forEach(form => {
        form.addEventListener("submit", e => {
            e.preventDefault();
            alert("Thank you! We will contact you shortly.");
            form.reset();
        });
    });
});
