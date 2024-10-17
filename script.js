// Function to open specific tabs/sections
function openTab(evt, tabName) {
    // Hide all tab content elements
    var tabcontent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove "active" class from all navigation links
    var tablinks = document.querySelectorAll("nav ul li a");
    tablinks.forEach(function(link) {
        link.classList.remove("active");
    });

    // Display the clicked tab's content
    var selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
    }

    // Add "active" class to the clicked link
    evt.currentTarget.classList.add("active");
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').replace('#', '');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Event listener to handle tab display when navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        const tabName = this.getAttribute('href').replace('#', '');
        openTab(event, tabName);
    });
});

