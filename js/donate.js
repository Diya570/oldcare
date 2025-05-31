function openTab(event, tabName) {
    // Hide all tab contents and remove 'active' class from buttons
    document.querySelectorAll(".tab-content").forEach((content) => {
        content.style.display = "none";
        content.classList.remove("active");
    });

    document.querySelectorAll(".tab-button").forEach((button) => {
        button.classList.remove("active");
    });

    // Show the selected tab content and add 'active' class to button
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Initial setup: show the first tab by default
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tab-content").style.display = "block";
});
