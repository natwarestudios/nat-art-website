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
    subtitle: "",
    description:
      "Nat Ware is a photographer originally from the Pacific Northwest now living in Chicago. They hold a B.F.A. from the School of the Art Institute of Chicago. They also help run Amateur Press, a small independent photobook press.",
    folder: null,
    images: [],
  },
  "The Light Gets In": {
    title: "The Light Gets In",
    subtitle: "published by Amateur Press June 2025",
    description:
      "Images build through repetition, erasure, overlay. The surface of the work is a site of accumulation. Rust, residue, gesture all sit in relation in these images. The Light Gets In reads as a visual whisper, modest in scale, but precise in its resonance. It’s less about declaring a moment, and more about holding space for one to emerge. What’s revealed isn’t the scene itself, but how the artist moves through it carefully, and responsively, which highlights the relationship between place and memory. What is prescribed and overlaid versus what is inherited and naturalized.",
    folder: "the-light-gets-in/",
    images: [
      "book-photos-1.jpg",
      "book-photos-2.jpg",
      "book-photos-3.jpg",
      "IMG_2975.jpeg",
      "IMG_2976.jpeg",
      "vacant-lot-portland-1-copy.jpg",
      "vacant-lot-portland-3-copy.jpg",
      "vacant-lot-portland-4-copy.jpg",
      "vacant-lot-portland-5-copy.jpg",
      "vacant-lot-portland-6-copy.jpg",
      "vacant-lot-portland-10-copy.jpg",
      "vacant-lot-portland-12-copy.jpg",
      "vacant-lot-portland-13-copy.jpg",
      "vacant-lot-portland-14-copy.jpg",
      "vacant-lot-portland-15-copy.jpg",
      "vacant-lot-portland-16-copy.jpg",
      "vacant-lot-portland-20-copy.jpg",
    ],
  },
  "Northwest South Road": {
    title: "Northwest South Road",
    subtitle: "published by General Things Press November 2024",
    description: `"Northwest South Road" by Nat Ware was published in 2024 by General Things Press. The small risographed perfect bound book is 81 pages long, and about 4 1/2" x 5 1/2". The work is composed of photographs taken by Ware during a return trip to their family's home in August 2023. The images feature roadside textures, blackberry bushes at night, birds, and shifting light. The photos resist the notion of landscape as a static subject. Instead, they propose a different kind of record: one grounded in motion, attention, and memory. These are not definitive views, but passing ones, and the photographic frame offers both clarity and interruption. The camera becomes a participant in the landscape rather than a tool of capture. The photographs operate simultaneously as documentation and notation—marking both external details and internal rhythms. Here, the act of looking is inseparable from the terrain itself: slow, searching, and subject to change. Northwest South Road invites viewers into a geography shaped not just by location, but by return, by the way memory travels through space, and how the familiar continues to shift beneath the surface of close observation.`,
    folder: "northwest-south-road/",
    images: [
      "nat_ware_1.jpg",
      "nat_ware_2.jpg",
      "nat_ware_3.jpg",
      "nat_ware_4.jpg",
      "nat_ware_5.jpg",
      "arcanite-1.jpg",
      "arcanite-2.jpg",
      "arcanite-5.jpg",
      "arcanite-8.jpg",
      "arcanite-10.jpg",
      "arcanite-12.jpg",
      "arcanite-13.jpg",
      "arcanite-14.jpg",
      "arcanite-15.jpg",
      "dust-behind-truck-1-copy.jpg",
    ],
  },
  2026: {
    title: "Photography",
    subtitle: "2026",
    description: "",
    folder: null,
    images: [],
  },
  2025: {
    title: "Photography",
    subtitle: "2025",
    description: "",
    folder: null,
    images: [],
  },
  2024: {
    title: "Photography",
    subtitle: "2024",
    description: "",
    folder: null,
    images: [],
  },
  2023: {
    title: "Photography",
    subtitle: "2023",
    description: "",
    folder: null,
    images: [],
  },
  "2018-2022": {
    title: "Photography",
    subtitle: "2018 - 2022",
    description: "",
    folder: null,
    images: [],
  },
  "2023-2026": {
    title: "Painting & Mixed Media",
    subtitle: "2023 - 2026",
    description: "",
    folder: null,
    images: [],
  },
  "To What End": {
    title: "To What End",
    subtitle: "with Jordan Keyes at the Second Room",
    description: "",
    folder: null,
    images: [],
  },
  Unmoored: {
    title: "Umoored",
    subtitle: "group show at Mana Contemporary",
    description: "",
    folder: null,
    images: [],
  },
};

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const description = document.querySelector(".description");
const mainImage = document.getElementById("main-img");
const galleryDisplay = document.getElementById("gallery-display");

function loadSection(sectionName) {
  const section = sections[sectionName];

  // set title
  title.textContent = section.title;
  // set subtitle
  if (section.subtitle != "") {
    subtitle.style.display = "block";
    subtitle.textContent = section.subtitle;
  } else {
    subtitle.style.display = "none";
  }
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
      img.src = "images/" + section.folder + image;
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
