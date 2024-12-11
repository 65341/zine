// Function to check if the client is on a desktop
function checkDevice() {
  // Use matchMedia to detect desktop devices based on screen width
  if (window.matchMedia("(min-width: 768px)").matches) {
    // Create a nav element
    const desktopNav = document.createElement("nav");
    desktopNav.style.display = "flex"; // Horizontal layout
    desktopNav.style.justifyContent = "space-between"; // Fully justify links
    desktopNav.style.marginTop = "10px"; // Add spacing below the header
    desktopNav.style.width = "100%"; // Stretch across the container width
    desktopNav.style.maxWidth = "800px"; // Match the container width
    desktopNav.style.marginLeft = "auto"; // Center-align inside container
    desktopNav.style.marginRight = "auto"; // Center-align inside container

    // Create an array of link text and their href values
    const links = [
      { text: "HOME", href: "#" },
      { text: "ARTICLES", href: "#" },
      { text: "CONTACT", href: "#" },
      { text: "EVENTS", href: "#" },
    ];

    // Generate links dynamically
    links.forEach((link) => {
      const a = document.createElement("a");
      a.textContent = link.text;
      a.href = link.href; // Placeholder href
      a.style.flex = "1"; // Make each link take up equal space
      a.style.textAlign = "center"; // Center-align text within each space
      a.style.textDecoration = "none"; // Remove underline
      a.style.fontFamily = "Arial, sans-serif"; // Sans-serif font
      a.style.fontSize = "25px"; // Slightly larger font
      a.style.fontWeight = "bold"; // Make the text bold
      a.style.color = "#d3d3d3"; // Match text color with the site
      a.style.textTransform = "uppercase"; // All caps
      a.style.padding = "10px 0"; // Add vertical padding for better spacing
      desktopNav.appendChild(a);
    });

    // Insert the nav below the header
    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", desktopNav);
  }
}

// Run the checkDevice function when the page loads
window.addEventListener("DOMContentLoaded", checkDevice);
