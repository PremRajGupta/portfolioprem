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
const skillDescriptions = {
  Python:
    "Python is a versatile high-level programming language used in web development, data science, AI, and automation.",
  Java: "Java is an object-oriented language used for building cross-platform applications, especially enterprise-scale apps.",
  C: "C is a foundational programming language widely used for system software, embedded systems, and low-level programming.",
  "C++":
    "C++ extends C with object-oriented features and is used in game development, high-performance apps, and simulations.",
  JavaScript:
    "JavaScript is essential for building dynamic and interactive websites. It runs in the browser and on servers (Node.js).",
  HTML: "HTML (HyperText Markup Language) is used to structure content on the web.",
  CSS: "CSS (Cascading Style Sheets) styles HTML elements and creates responsive, attractive layouts.",

  Git: "Git is a version control system that tracks changes and allows collaboration on coding projects.",
  "VS Code":
    "Visual Studio Code is a lightweight but powerful code editor from Microsoft with great extensions.",

  "Adobe XD":
    "Adobe XD is used to design and prototype user experiences for web and mobile applications.",
  Linux:
    "Experienced in Using Linux Systems for server management, terminal operations, and cyberseccurity tools.",
  "Ethical Hacking":
    "Skilled in identifying vulnerablities and securing systems using white-hat techniques.",
  Penetration:
    "Hands-on experience with tools like Metasploit, Burp Suite and Nmap for comprehensive security assessments.",
  "Web Penetration":
    "Skill-70%, Expertise in testing web applications for XSS, SQLite, CSRF, and Other common vulnerabilities.",
  Mobile:
    "Skill-55%, Knowledgeable in testing android and IOS apps for security loopholes using tools like MobSF and Frida",
  AWS: "Skill-80%, Benefits of Cloud: Scalability, Agility, Elasticity, Cost-Effectiveness IAM, EC2, S3, Versioning, Lifecycle policies, S3 Encryption, Sybnets(Public/Private), ELB, ETC.",
};

function showDetail(skill) {
  const detailBox = document.getElementById("skill-detail");
  detailBox.innerHTML = `<strong>${skill}</strong>: ${
    skillDescriptions[skill] || "Description not available."
  }`;
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
