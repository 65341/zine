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

    if (!dropdownMenu.classList.contains("active")) {
        // Activate and fade in
        dropdownMenu.style.transition = "opacity 0.2s ease-in";
        dropdownMenu.style.opacity = 0; // Start transparent
        dropdownMenu.style.display = "block"; // Make it visible
        setTimeout(() => {
            dropdownMenu.style.opacity = 1; // Fully visible after transition
        }, 0);
        dropdownMenu.classList.add("active");
    } else {
        // Fade out
        dropdownMenu.style.transition = "opacity 0.1s ease-out";
        dropdownMenu.style.opacity = 0; // Start fading out
        setTimeout(() => {
            dropdownMenu.style.display = "none"; // Hide after fade-out
            dropdownMenu.classList.remove("active");
        }, 100); // Match the fade-out duration
    }
}

function toggleSearch() {
    const searchDropdown = document.getElementById("search-dropdown");

    if (!searchDropdown.classList.contains("active")) {
        // Activate and fade in
        searchDropdown.style.transition = "opacity 0.2s ease-in";
        searchDropdown.style.opacity = 0; // Start transparent
        searchDropdown.style.display = "block"; // Make it visible
        setTimeout(() => {
            searchDropdown.style.opacity = 1; // Fully visible after transition
        }, 0);
        searchDropdown.classList.add("active");
    } else {
        // Fade out
        searchDropdown.style.transition = "opacity 0.1s ease-out";
        searchDropdown.style.opacity = 0; // Start fading out
        setTimeout(() => {
            searchDropdown.style.display = "none"; // Hide after fade-out
            searchDropdown.classList.remove("active");
        }, 100); // Match the fade-out duration
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
    mainContent.style.transition = "opacity 0.1s ease-out";
    mainContent.style.opacity = 0;

    setTimeout(() => {
        switch (page) {
        case "HOME":
            loadMostRecentArticle();
            break;
        case "ARTICLES":
            mainContent.innerHTML = `
            <h1>Articles</h1>
            <p>Welcome to the articles section. Explore our latest content here.</p>
            `;
            break;
        case "CONTACT":
            mainContent.innerHTML = `
            <article class="recent-article">
                <h1>What Is S.W.A.M.P. Magazine?</h1>
                <p class="author-date">by William Ross</p>
                <p>When I was a teen, I spent years dreaming about the day I’d finally get out of this place. I eventually did, but I returned with a fresh perspective and a desire to seek out the love that has never failed me: <em>music</em>. Since getting involved in the Shreveport music scene, my life has been filled with three elements that I believe are essential to a complete human experience: community, purpose, and pleasure.</p>
                <p>And while I have come to find that these elements are abundant in our scene, there was a time when I had no idea our scene was as active as it is. Further, the narrative that “nothing cool happens in Shreveport” is quite popular among locals of all ages. It gets thrown around every time I’m trying to set up plans with people outside of the music scene.</p>
                <p>I know Shreveport has no shortage of talented musicians, visual artists, and other kinds of creative people. So what the fuck is going on? Where is the love for our community? Why don’t more people know about what we’ve got going on? And if they do know about it, why don’t they get involved? What happened to people doing things instead of being on their phones all day?</p>
                <p>So if you were to ask me what S.W.A.M.P. Magazine is, I’d first tell you that it’s the Shreveport Writers and Musicians Platform. Second, I’d tell you that S.W.A.M.P. is a call to action. If you don’t like the music here, make better music! If you don’t like the art here, make better art! If you haven’t experienced anything Shreveport has to offer, here is your invitation: Get involved. Start a band. Go to an exhibit. Go to a show at Bear’s. Talk to people. Write an article for this zine. START YOUR OWN ZINE. It’s really that simple.</p>
                <h1>Want to contribute?</h1>
                <p>Shoot us an email at <em>swampmagazine318@gmail.com</em>.<p>
            <article>
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
    mainContent.style.transition = "opacity 0.7s ease-in";
    mainContent.style.opacity = 1;
    }, 500); // Match the duration of the fade-out
  }

  // Function to dynamically load the most recent article
  function loadMostRecentArticle() {
    // Fetch the list of articles from articles.json
    fetch('./articles.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse the JSON file
      })
      .then((data) => {
        // Save the fetched JSON to the articles array
        const articles = data;
        console.log("Articles loaded:", articles);
  
        // Sort articles by date (descending)
        articles.sort().reverse();
        console.log("Sorted articles:", articles);
  
        // Get the most recent article
        const mostRecent = articles[0];
        console.log("Most recent article folder:", mostRecent);
        const articleFolder = `./articles/${mostRecent}/`;
  
        // Fetch and load the article content
        return fetch(`${articleFolder}article.html`).then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        }).then((html) => {
          const mainContent = document.getElementById("main-content");
          mainContent.innerHTML = `
            <article class="recent-article">
                <img src="${articleFolder}image.jpeg" alt="Article Image">
                ${html}
            </article>
            <div class="divider"></div>
            <div class="more-content">
              <p>Check out more from this issue <span class="arrow">↓</span></p>
              <a href="path-to-full-issue.html" class="cover-link">
                <img src="issue001.jpg" alt="issue #1" class="cover-image">
              </a>
            </div>
          `;
        });
      })
      .catch((error) => {
        console.error("Failed to load the most recent article:", error);
        const mainContent = document.getElementById("main-content");
        mainContent.innerHTML = `
          <h1>Error Loading Article</h1>
          <p>Unable to load the most recent article. Please try again later.</p>
        `;
      });
  }

  //newsletter code
  document.getElementById("newsletter-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior

    const form = e.target;
    const formData = new FormData(form);

    // Replace 'your-formspree-id' with your Formspree endpoint ID
    fetch("https://formspree.io/f/xjkvddny", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                document.getElementById("form-message").textContent =
                    "Thanks for signing up!";
                document.getElementById("form-message").style.display = "block";
                form.reset(); // Reset the form fields
            } else {
                document.getElementById("form-message").textContent =
                    "Oops! Something went wrong. Please try again.";
                document.getElementById("form-message").style.display = "block";
            }
        })
        .catch((error) => {
            console.error("Form submission error:", error);
            document.getElementById("form-message").textContent =
                "Oops! Something went wrong. Please try again.";
            document.getElementById("form-message").style.display = "block";
        });
});
  
// Run the checkDevice function when the page loads
window.addEventListener("DOMContentLoaded", checkDevice);
// Initialize the page with the HOME content
document.addEventListener("DOMContentLoaded", () => {
    setPage('HOME');
  });
