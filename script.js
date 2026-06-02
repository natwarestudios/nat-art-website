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

import { createIcons, ChevronRight, ChevronLeft } from "https://esm.sh/lucide";

createIcons({
  icons: {
    ChevronRight,
    ChevronLeft,
  },
});

const sections = {
  Info: {
    title: "Info",
    description:
      "Nat Ware is a photographer originally from the Pacific Northwest now living in Chicago. They hold a B.F.A. from the School of the Art Institute of Chicago. They also help run Amateur Press, a small independent photobook press.",
    folder: null,
    images: [],
  },
  "The Light Gets In": {
    title: "The Light Gets In published by Amateur Press June 2025",
    description:
      "Images build through repetition, erasure, overlay. The surface of the work is a site of accumulation. Rust, residue, gesture all sit in relation in these images. The Light Gets In reads as a visual whisper, modest in scale, but precise in its resonance. It’s less about declaring a moment, and more about holding space for one to emerge. What’s revealed isn’t the scene itself, but how the artist moves through it carefully, and responsively, which highlights the relationship between place and memory. What is prescribed and overlaid versus what is inherited and naturalized.",
  },
};

const title = document.getElementById("title");
const description = document.querySelector(".description");
const mainImage = document.getElementById("main-img");
const galleryDisplay = document.getElementById("gallery-display");

function loadSection(sectionName) {
  const section = sections[sectionName];

  // set title
  title.textContent = section.title;
  // set description
  if (section.description != "") {
    description.style.display = "block";
    description.textContent = section.description;
  } else {
    description.style.display = "none";
  }
  // set gallery imgs
  galleryDisplay.innerHTML = "";
  if (section.images.length < 1) {
    mainImage.src = "";
  } else {
    section.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = section.folder + image;
      img.classList.add("gallery-img");
      img.addEventListener("click", () => {
        img.parentNode.childNodes.forEach((img) => {
          img.classList.remove("selected");
        });
        img.classList.add("selected");
        mainImage.src = img.src;
      });
      galleryDisplay.appendChild(img);
      // select first img by default
      if (index === 0) {
        img.click();
      }
    });
  }
}

// side bar buttons
document.querySelectorAll(".clickable").forEach((element) => {
  element.addEventListener("click", () => {
    // deselect other clickable elements
    document.querySelectorAll(".clickable").forEach((deselectedElement) => {
      deselectedElement.classList.remove("selected");
    });
    element.classList.add("selected");
    loadSection(element.textContent.trim());
  });
});

loadSection("Info");
