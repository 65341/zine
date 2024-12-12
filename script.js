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
      { text: "HOME" },
      { text: "ARTICLES"},
      { text: "CONTACT" },
      { text: "EVENTS" },
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
      // Add onClick listener to trigger both setPage and toggleDropdown
    a.onclick = (e) => {
    e.preventDefault(); // Prevent the default link behavior
    setPage(link.text); // Call setPage with the link text
  };
      desktopNav.appendChild(a);
    });

    // Insert the nav below the header
    const header = document.querySelector("header");
    header.insertAdjacentElement("afterend", desktopNav);
  }
}

function toggleDropdown() {
    const dropdownMenu = document.getElementById("dropdown-menu");
    dropdownMenu.classList.toggle("active");
  }  

function toggleSearch() {
  const searchDropdown = document.getElementById("search-dropdown");
  searchDropdown.classList.toggle("active");

  if (searchDropdown.classList.contains("active")) {
    searchDropdown.style.display = "block";
  } else {
    searchDropdown.style.display = "none";
  }
}

// Add functionality to handle the Enter key
document
  .querySelector("#search-dropdown input")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const query = e.target.value.trim();
      if (query) {
        // Redirect to a search results page with the query
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
      }
    }
  });

  function setPage(page) {
    const mainContent = document.getElementById("main-content");
  
    // Add a fade-out effect
    mainContent.style.opacity = 1; // Ensure it's fully visible
    mainContent.style.transition = "opacity 0.2s ease-out";
    mainContent.style.opacity = 0;

    setTimeout(() => {
        switch (page) {
        case "HOME":
            mainContent.innerHTML = `LATEST ARTICLE GOES HERE`;
            break;
        case "ARTICLES":
            mainContent.innerHTML = `
            <h1>Articles</h1>
            <p>Welcome to the articles section. Explore our latest content here.</p>
            `;
            break;
        case "CONTACT":
            mainContent.innerHTML = `
            <h1>Contact Us</h1>
            <p>Got questions? Reach out to us at <a href="mailto:info@swampmagazine.com">info@swampmagazine.com</a>.</p>
            `;
            break;
        case "EVENTS":
            mainContent.innerHTML = `
            <h1>Upcoming Events</h1>
            <p>Stay tuned for our latest events and gatherings!</p>
            `;
            break;
        default:
            mainContent.innerHTML = ``;
            break;
        }
    // Add a fade-in effect
    mainContent.style.transition = "opacity 0.8s ease-in";
    mainContent.style.opacity = 1;
    }, 500); // Match the duration of the fade-out
  }
  

// Run the checkDevice function when the page loads
window.addEventListener("DOMContentLoaded", checkDevice);
// Initialize the page with the HOME content
document.addEventListener("DOMContentLoaded", () => {
    setPage('HOME');
  });
