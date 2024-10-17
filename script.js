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
