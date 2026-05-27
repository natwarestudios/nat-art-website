// button highlighting
document.querySelectorAll(".clickable").forEach((element) => {
  element.addEventListener("click", () => {
    // deselect other clickable elements
    document.querySelectorAll(".clickable").forEach((deselectedElement) => {
      deselectedElement.classList.remove("selected");
    });
    element.classList.add("selected");
  });
});

// contact form modal
const modal = document.querySelector(".modal-overlay");
const form = document.querySelector(".contact-form");
const formCompleteInfo = document.querySelector(".form-complete");
const formSubmitButton = form.querySelector('button[type="submit"]');

document.getElementById("contact-button").addEventListener("click", () => {
  modal.classList.add("active");
  form.classList.add("active");
  document.body.classList.add("no-scroll");
});
document.querySelectorAll(".close-modal-button").forEach((button) => {
  button.addEventListener("click", () => {
    closeFormModal();
  });
});
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeFormModal();
  }
});
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", "6a3a898d-7f17-4457-b817-b867e1cd67a8");

  const originalText = formSubmitButton.textContent;

  formSubmitButton.textContent = "Sending...";
  formSubmitButton.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    form.classList.remove("active");
    formCompleteInfo.classList.add("active");
    if (response.ok) {
      formCompleteInfo.firstElementChild.textContent =
        "Your message was sent! I'll get back to you as soon as I can.";
    }
  } catch (error) {
    formCompleteInfo.firstElementChild.textContent =
      "Something went wrong. Please try again, sorry about that!";
  } finally {
    formSubmitButton.textContent = originalText;
    formSubmitButton.disabled = false;
  }
});

function closeFormModal() {
  modal.classList.remove("active");
  formCompleteInfo.classList.remove("active");
  form.reset();
  document.body.classList.remove("no-scroll");
}

// loading images
const fileNames = [
  "ankara-2-copy.jpg",
  "ankara-5-copy.jpg",
  "ankara-7-copy.jpg",
  "ankara-window-copy.jpg",
  "antalya-beach-2-copy.jpg",
  "antalya-bw-broken-window-copy.jpg",
  "antalya-net-bw-2-copy.jpg",
  "sheep-bw-16-copy.jpg",
  "ankara-2-copy.jpg",
  "ankara-5-copy.jpg",
  "ankara-7-copy.jpg",
  "ankara-window-copy.jpg",
  "antalya-beach-2-copy.jpg",
  "antalya-bw-broken-window-copy.jpg",
  "antalya-net-bw-2-copy.jpg",
  "sheep-bw-16-copy.jpg",
  "antalya-net-bw-2-copy.jpg",
  "sheep-bw-16-copy.jpg",
  "ankara-2-copy.jpg",
];

const galleryDisplay = document.getElementById("gallery-display");
fileNames.forEach((fileName) => {
  const img = document.createElement("img");
  img.src = `./nat-fotos/${fileName}`;
  img.classList.add("gallery-img");
  galleryDisplay.appendChild(img);
});
