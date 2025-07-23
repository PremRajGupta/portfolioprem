// navbar section
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const navbarLinks = document.getElementById("navbar-links");
const navItems = document.querySelectorAll(".navbar-links a");

menuOpen.addEventListener("click", () => {
  navbarLinks.classList.add("active");
  menuOpen.style.display = "none";
  menuClose.style.display = "inline";
});

menuClose.addEventListener("click", () => {
  navbarLinks.classList.remove("active");
  menuOpen.style.display = "inline";
  menuClose.style.display = "none";
});

// Hide nav on link click (for mobile UX)
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    menuOpen.style.display = "inline";
    menuClose.style.display = "none";
  });
});

// hero section
const roles = ["Software Tester", "Penetration Tester"];
let currentRole = 0;
const roleElement = document.getElementById("dynamic-role");

function updateRole() {
  currentRole = (currentRole + 1) % roles.length;
  roleElement.textContent = roles[currentRole];
}

setInterval(updateRole, 2000); // Change role every 3 seconds

// smooth

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const offset = 70; // height of fixed navbar
    const topPosition = target.offsetTop - offset;

    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
  });
});

// Skill Section
function toggleDetail(element) {
  const detailBox = element.nextElementSibling.nextElementSibling;
  const isVisible = detailBox.style.display === "block";

  // Hide all other detail boxes
  document.querySelectorAll(".skill-detail").forEach((box) => {
    box.style.display = "none";
  });

  // Toggle current box
  detailBox.style.display = isVisible ? "none" : "block";
}

// Project section

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filterValue = button.getAttribute("data-filter");

    projectCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all" || category.includes(filterValue)) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// contact section
document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const status = document.getElementById("formStatus");
    status.textContent = "Sending...";

    const formData = {
      name: this.name.value.trim(),
      email: this.email.value.trim(),
      message: this.message.value.trim(),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzNfqU8NroZ_hKpnH-4CHDtZhqttXJ_czlqREV6ZyIr8-7YDqnDDurmLcUIQ7RukzlL/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        this.reset();
      } else {
        throw new Error("Network error");
      }
    } catch (err) {
      status.textContent = "Failed to send message. Please try again.";
      status.style.color = "red";
    }
  });
