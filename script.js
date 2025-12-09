"use strict"
const toggleSwitch = document.getElementById("toggleSwitch");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

toggleSwitch.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});
document.querySelectorAll('.project-card').forEach(card => {
    const toggle = card.querySelector('.read-more-hover');
    const hidden = card.querySelector('.hidden-content');

    if (toggle && hidden) {
        toggle.addEventListener('click', () => {
            hidden.classList.toggle('open');
            toggle.classList.toggle('active');
        });
    }
});

