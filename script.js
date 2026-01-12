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

// ! End of NavBar Section!

// Zoom Out image
function openModal(img) {
  const modal = document.getElementById("imgModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "flex";
  modalImg.src = img.src;

  modalImg.style.transform = "scale(0.7)";
  setTimeout(() => {
    modalImg.style.transition = "0.3s ease";
    modalImg.style.transform = "scale(1)";
  }, 10);
}

function closeModal() {
  document.getElementById("imgModal").style.display = "none";
}
//! end of zoom out image

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

//!end of smooth screen slide

// Project section

// const filterButtons = document.querySelectorAll(".filter-btn");
// const projectCards = document.querySelectorAll(".project-card");

// filterButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     // Remove active class from all
//     filterButtons.forEach((btn) => btn.classList.remove("active"));
//     button.classList.add("active");

//     const filterValue = button.getAttribute("data-filter");

//     projectCards.forEach((card) => {
//       const category = card.getAttribute("data-category");

//       if (filterValue === "all" || category.includes(filterValue)) {
//         card.classList.remove("hide");
//       } else {
//         card.classList.add("hide");
//       }
//     });
//   });
// });

// const track = document.getElementById("certTrack");
// let index = 0;

// function moveRight() {
//   index++;
//   if (index > track.children.length - 1) index = 0;
//   track.style.transform = `translateX(-${index * 345}px)`;
// }

// function moveLeft() {
//   index--;
//   if (index < 0) index = track.children.length - 1;
//   track.style.transform = `translateX(-${index * 345}px)`;
// }

// // Auto infinite slide
// setInterval(moveRight, 3000);

// // Modal view
// function openModal(src) {
//   document.getElementById("certModal").style.display = "flex";
//   document.getElementById("modalImg").src = src;
// }

// function closeModal() {
//   document.getElementById("certModal").style.display = "none";
// }

// contact section
// document
//   .getElementById("contactForm")
//   .addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const status = document.getElementById("formStatus");
//     status.textContent = "Sending...";

//     const formData = {
//       name: this.name.value.trim(),
//     email: this.email.value.trim(),
//     message: this.message.value.trim(),
//   };

//   try {
//     const response = await fetch(
//       "https://script.google.com/macros/s/AKfycbzNfqU8NroZ_hKpnH-4CHDtZhqttXJ_czlqREV6ZyIr8-7YDqnDDurmLcUIQ7RukzlL/exec",
//       {
//         method: "POST",
//         body: JSON.stringify(formData),
//         headers: { "Content-Type": "application/json" },
//       }
//     );

//     if (response.ok) {
//       status.textContent = "Message sent successfully!";
//       status.style.color = "green";
//       this.reset();
//     } else {
//       throw new Error("Network error");
//     }
//   } catch (err) {
//     status.textContent = "Failed to send message. Please try again.";
//     status.style.color = "red";
//   }
// });

function openCert(url) {
  document.getElementById("certModal").style.display = "flex";
  document.getElementById("certFrame").src = url;
}

function closeCert() {
  document.getElementById("certModal").style.display = "none";
  document.getElementById("certFrame").src = "";
}

// Swiper Init
new Swiper(".certificate-swiper", {
  loop: true,
  spaceBetween: 25,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
