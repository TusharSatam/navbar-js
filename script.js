document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Remove active class from all nav links
            navLinks.forEach((link) => link.classList.remove("active"));
  
            // Add active class to the corresponding nav link
            const id = entry.target.getAttribute("id");
            const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
            if (activeLink) activeLink.classList.add("active");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );
  
    // Observe each section
    sections.forEach((section) => observer.observe(section));
  });
  