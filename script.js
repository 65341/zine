// Function to check if the client is on a desktop
function checkDevice() {
    // Use matchMedia to detect desktop devices based on screen width
    if (window.matchMedia("(min-width: 768px)").matches) {
      // Client is on a desktop, modify the HTML
      const desktopText = document.createElement("p");
      desktopText.textContent = "You are viewing this on a desktop.";
      desktopText.style.color = "#d3d3d3"; // Match text color with the site's style
      desktopText.style.textAlign = "center"; // Center align the text
      desktopText.style.marginTop = "10px"; // Add spacing below the header
  
      // Insert the text below the header
      const header = document.querySelector("header");
      header.insertAdjacentElement("afterend", desktopText);
    }
  }
  
  // Run the checkDevice function when the page loads
  window.addEventListener("DOMContentLoaded", checkDevice);
  