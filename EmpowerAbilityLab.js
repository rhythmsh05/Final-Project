// JavaScript code to manage focus and accessibility

//Template Function that can be used to run JavaScript on the page

//Note: This can be changed to whatever JavaScript formatting you would like
function knowledgeRunner() {

}

function navigateTo(section) {
    document.querySelectorAll('main > section').forEach(sec => sec.classList.add('hidden'));
    document.getElementById(section).classList.remove('hidden');
}

window.navigateTo = navigateTo;

// Function to show/hide the event details textarea when the "Invite a Speaker" checkbox is selected
function toggleEventDetails() {
    var checkbox = document.getElementById('option2');
    var eventDetails = document.getElementById('eventDetails');
    if (checkbox.checked) {
        eventDetails.classList.remove('hiddenbox');
    } else {
        eventDetails.classList.add('hiddenbox');
    }
}

// Handle form submission (example: show a thank you message)
function handleSubmit(event) {
    event.preventDefault();
    var formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = " <div class = 'formMessage'> Thank you for scheduling a call. We will get back to you soon!</div>";
}
knowledgeRunner();

// Open Modal
document.getElementById('openModalButton').addEventListener('click', function () {
    const modal = document.getElementById('customModal');
    modal.classList.add('show'); // Bootstrap "show" class to display modal
    modal.style.display = 'block'; // Ensure modal is visible
    modal.setAttribute('aria-hidden', 'false'); // Update ARIA attribute
    modal.classList.add("highlight-modal"); // Add highlight effect to modal
    history.pushState({ page: "modal" }, null, "#modal"); // Add state to history
});

// Close Modal
document.querySelectorAll(".btn-close").forEach(function (button) {
  button.addEventListener("click", function () {
    const modal = document.getElementById('customModal');
    modal.classList.remove('show');
    modal.style.display = 'none'; // Hide modal
    modal.setAttribute('aria-hidden', 'true'); // Update ARIA attribute
    modal.classList.remove("highlight-modal"); // Remove highlight effect from modal
    document.getElementById("openModalButton").focus(); // Return focus to the triggering element
    history.back(); // Navigate back in history
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith("#")) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
      history.pushState({ page: targetID }, null, `#${targetID}`); // Add state to history
    }
  });
});

// Handle back/forward navigation for modal and sections
window.addEventListener("popstate", function (event) {
  if (event.state && event.state.page === "modal") {
    var modal = document.getElementById("customModal");
    modal.style.display = "block";
    modal.setAttribute("aria-hidden", "false");
    modal.classList.add("highlight-modal");
    modal.querySelector(".modal-title").focus();
  } else {
    var modal = document.getElementById("customModal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modal.classList.remove("highlight-modal");
  }
});

document.querySelector(".nav-toggle").addEventListener("click", function () {
  const nav = document.querySelector("nav ul");
  if (nav.classList.contains("active")) {
    nav.classList.remove("active");
  } else {
    nav.classList.add("active");
  }
});
