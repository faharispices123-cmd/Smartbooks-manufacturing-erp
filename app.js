
// SMARTBOOKS MANUFACTURING ERP
// Main application JavaScript

document.addEventListener("DOMContentLoaded", function () {

    // Display a welcome message
    console.log("Welcome to SmartBooks Manufacturing ERP");

    // Highlight the selected navigation menu
    const menuLinks = document.querySelectorAll("nav a");

    menuLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            menuLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

            const heading = document.querySelector("main h2");

            if (heading) {
                heading.textContent = link.textContent.trim();
            }
        });
    });

    // Add a live date and time display
    const header = document.querySelector("header");

    if (header) {
        const clock = document.createElement("p");
        clock.id = "live-clock";
        clock.style.marginTop = "12px";
        clock.style.fontSize = "13px";
        clock.style.color = "#cccccc";

        header.appendChild(clock);

        function updateClock() {
            const now = new Date();

            clock.textContent = now.toLocaleString("en-TZ", {
                dateStyle: "full",
                timeStyle: "medium",
                timeZone: "Africa/Dar_es_Salaam"
            });
        }

        updateClock();
        setInterval(updateClock, 1000);
    }

});
