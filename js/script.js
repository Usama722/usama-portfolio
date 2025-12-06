// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    const icon = menuBtn.querySelector("i");
    if (mobileMenu.classList.contains("hidden")) {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    } else {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    }
  });
}

// Close mobile menu when clicking a link
document.querySelectorAll("#mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuBtn.querySelector("i").classList.remove("fa-times");
    menuBtn.querySelector("i").classList.add("fa-bars");
  });
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Contact form submission
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert("Please fill in all fields");
      return;
    }

    // In a real application, you would send this to a server
    // For now, we'll just show a success message

    // Show loading state
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    submitBtn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      // Reset form
      contactForm.reset();

      // Show success message
      alert(
        "Thank you! Your message has been sent. I'll get back to you soon!"
      );

      // Reset button
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        menuBtn.querySelector("i").classList.remove("fa-times");
        menuBtn.querySelector("i").classList.add("fa-bars");
      }

      // Calculate offset for fixed navbar
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

// Observe elements to animate
document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Project data (could be fetched from an API in a real app)
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-featured online shopping platform",
    tags: ["React", "Node.js", "MongoDB"],
    image: "assets/images/project1.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description: "Collaborative task management application",
    tags: ["Vue.js", "Firebase"],
    image: "assets/images/project2.jpg",
    github: "#",
    live: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather application",
    tags: ["API", "JavaScript"],
    image: "assets/images/project3.jpg",
    github: "#",
    live: "#",
  },
];

// You can dynamically load projects here if needed
function loadProjects() {
  const projectContainer = document.querySelector(".project-grid");
  if (projectContainer) {
    // Implementation for dynamic project loading
  }
}

// Initialize when page loads
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portfolio website loaded successfully!");

  // Add initial animation to hero section
  const heroSection = document.querySelector("#home");
  if (heroSection) {
    heroSection.classList.add("fade-in-up");
  }

  // Add current year to footer
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
