// Menu bar

  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  const navbarLinks = document.getElementById("navbar-links");

  menuOpen.addEventListener("click", () => {
    navbarLinks.classList.add("active");
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  });

  menuClose.addEventListener("click", () => {
    navbarLinks.classList.remove("active");
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  });

  // Optional: close menu when any link is clicked
  document.querySelectorAll(".navbar-links a").forEach(link => {
    link.addEventListener("click", () => {
      navbarLinks.classList.remove("active");
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
    });
  });

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
