// Simple include script
async function includeHTML(id, file) {
  try {
    // Always fetch from root folder, not relative to current page
    const base = window.location.origin + window.location.pathname.split("/")[1];
    const path = "/" + file;

    const response = await fetch(path);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;

    // Highlight active menu
    const current = window.location.pathname.split("/").pop();
    document.querySelectorAll(".main-nav a, .sidebar a").forEach(link => {
      if (link.getAttribute("href") === current) {
        link.classList.add("active");
      }
    });
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header-placeholder", "header.html");
  includeHTML("footer-placeholder", "footer.html");
  includeHTML("sidebar-placeholder", "sidebar.html");
});




// async function includeHTML(id, file) {
//   try {
//     const response = await fetch(file);
//     const text = await response.text();
//     document.getElementById(id).innerHTML = text;

//     // Highlight active menu based on current page
//     const current = window.location.pathname.split("/").pop();
//     document.querySelectorAll(".main-nav a").forEach(link => {
//       if (link.getAttribute("href") === current) {
//         link.classList.add("active");
//       }
//     });
//   } catch (err) {
//     console.error(`Error loading ${file}:`, err);
//   }
// }

// // Run when page loads
// document.addEventListener("DOMContentLoaded", () => {
//   includeHTML("header-placeholder", "header.html");
//   includeHTML("footer-placeholder", "footer.html");
//   includeHTML("sidebar-placeholder", "sidebar.html");

// });


