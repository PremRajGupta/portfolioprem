
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
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    menuOpen.style.display = "inline";
    menuClose.style.display = "none";
  });
});




  // hero section
  const roles = ["Python Developer", "Penetration Tester"];
let currentRole = 0;
const roleElement = document.getElementById("dynamic-role");

function updateRole() {
  currentRole = (currentRole + 1) % roles.length;
  roleElement.textContent = roles[currentRole];
}

setInterval(updateRole, 3000); // Change role every 3 seconds


  // smooth
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      const offset = 70; // height of fixed navbar
      const topPosition = target.offsetTop - offset;

      window.scrollTo({
        top: topPosition,
        behavior: 'smooth'
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

  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category.includes(filterValue)) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });
    });
  });
