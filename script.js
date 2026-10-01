/*------------------- contact form modal -------------------*/

const modal = document.querySelector(".modal-overlay");
const form = document.querySelector(".contact-form");
const formCompleteInfo = document.querySelector(".form-complete");
const formSubmitButton = form.querySelector('button[type="submit"]');

document.querySelectorAll(".contact-button").forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("active");
    form.classList.add("active");
    document.body.classList.add("no-scroll");
  });
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
  formData.append("access_key", "e4f5f037-2a58-483a-9d73-687739055655");

  const originalText = formSubmitButton.textContent;

  formSubmitButton.textContent = "Sending...";
  formSubmitButton.disabled = true;

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

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

/*------------------- grabbing icons -------------------*/

import {
  createIcons,
  ChevronRight,
  ChevronLeft,
  TextAlignJustify,
} from "https://esm.sh/lucide";

createIcons({
  icons: {
    ChevronRight,
    ChevronLeft,
    TextAlignJustify,
  },
});

/*------------------- mobile specific -------------------*/
var mobileSpecificInfo = false;

// mobile directory button functionality
const directoryOverlay = document.querySelector(".directory-overlay");
const directoryButton = document.querySelector(".directory-button");
const sidebar = document.querySelector(".side-bar");
const buttonSpacer = document.querySelector(".button-spacer");

// side bar placement for different device widths
if (window.innerWidth < 840) {
  const directoryButtonContainer = document.querySelector(
    ".directory-button-container",
  );
  directoryButtonContainer.appendChild(document.querySelector(".side-bar"));
  directoryButtonContainer.style.display = "flex";
  mobileSpecificInfo = true;

  directoryButton.addEventListener("click", (event) => {
    if (sidebar.style.display === "block") {
      closeDirectory();
    } else {
      directoryOverlay.classList.add("active");
      document.body.classList.add("no-scroll");
      sidebar.style.display = "block";
      directoryButton.classList.add("directory-button-open");
      buttonSpacer.style.display = "block";
    }
  });

  directoryOverlay.addEventListener("click", (event) => {
    if (event.target === directoryOverlay) {
      closeDirectory();
    }
  });
} else {
  document.querySelector(".directory-button-container").style.display = "none";
}

function closeDirectory() {
  directoryOverlay.classList.remove("active");
  sidebar.style.display = "none";
  directoryButton.classList.remove("directory-button-open");
  document.body.classList.remove("no-scroll");
  buttonSpacer.style.display = "none";
}

/*------------------- main content management -------------------*/
import { sections } from "./sections.js";

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const description = document.getElementById("description");
const visualsContainer = document.getElementById("visuals-container");
const spacer = document.getElementById("spacer");
const mainImage = document.getElementById("main-img");
const galleryDisplay = document.getElementById("gallery-display");
const galleryContainer = document.getElementById("gallery-container");
const arrowWrappers = document.querySelectorAll(".arrow-wrapper");
const verticalGallery = document.getElementById("vertical-gallery");
let currentSectionName = "Info";

function loadSection(sectionName) {
  currentSectionName = sectionName; // for gallery width function to access
  const section = sections[sectionName];

  // mobile layout exception for Info page
  if (section.title == "" && mobileSpecificInfo) {
    document.body.classList.add("mobile-exception");
    document.querySelectorAll(".mobile-info-only").forEach((element) => {
      element.style.display = "flex";
    });
    spacer.style.display = "block";
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("mobile-exception");
    document.querySelectorAll(".mobile-info-only").forEach((element) => {
      element.style.display = "none";
    });
    spacer.style.display = "none";
    document.body.classList.remove("no-scroll");
  }

  // on mobile, copyright only includes site attribution on info page
  const copyright = document.querySelector(".copyright");
  if (mobileSpecificInfo) {
    if (section.title == "") {
      copyright.innerHTML = `<p>
          © 2026 Nat Ware --- site by
          <a
            href="https://www.beebop.site/"
            target="_blank"
          >
            James Shipp
          </a>
        </p>`;
    } else {
      copyright.innerHTML = `<p>© 2026 Nat Ware</p>`;
    }
  } else {
    copyright.innerHTML = `<p>
          © 2026 Nat Ware --- site by
          <a
            href="https://www.beebop.site/"
            target="_blank"
          >
            James Shipp
          </a>
        </p>`;
  }

  // set title
  if (section.title != "") {
    title.style.display = "block";
    title.textContent = section.title;
  } else {
    title.style.display = "none";
  }
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
    description.innerHTML = section.description;
  } else {
    description.style.display = "none";
  }
  // set gallery imgs
  if (window.innerWidth < 840) {
    mainImage.src = "";
    mainImage.style.display = "none";
    galleryContainer.style.display = "none";

    verticalGallery.innerHTML = "";

    if (section.images.length < 1) {
      visualsContainer.style.display = "none";
    } else {
      visualsContainer.style.display = "flex";
      section.images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = "images/" + section.folder + image;
        img.loading = "lazy";
        img.classList.add("stacked-img");
        verticalGallery.appendChild(img);
      });
    }
    return;
  }
  galleryDisplay.innerHTML = "";
  if (section.images.length < 1) {
    mainImage.src = "";
    mainImage.style.display = "none";
    galleryContainer.style.display = "none";
    visualsContainer.style.display = "none";
    description.classList.add("grow");
  } else {
    mainImage.style.display = "block";
    galleryContainer.style.display = "flex";
    visualsContainer.style.display = "flex";
    description.classList.remove("grow");
    const visualsContainerWidth = visualsContainer.offsetWidth - 32; // setting before images load into container
    // set up images
    section.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = "images/" + section.folder + image;
      img.loading = "lazy";
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

    //tell them to update gallery width when all loaded
    const loadedImgs = galleryDisplay.querySelectorAll("img");
    let completeCount = 0;
    loadedImgs.forEach((img) => {
      if (img.complete) {
        completeCount++;
        if (completeCount === loadedImgs.length) {
          updateGalleryWidth(loadedImgs, visualsContainerWidth);
        }
      } else {
        img.addEventListener("load", () => {
          completeCount++;
          if (completeCount === loadedImgs.length) {
            updateGalleryWidth(loadedImgs, visualsContainerWidth);
          }
        });
      }
    });
  }
}

function updateGalleryWidth(loadedImgs, containerMaxWidth) {
  const totalImgsWidth = Array.from(loadedImgs).reduce((sum, img) => {
    return sum + img.offsetWidth;
  }, 0);
  const gapWidth = (loadedImgs.length - 1) * 8; // hardcoded gap width
  const arrowsWidth = 32; // navigation arrows on gallery container
  const totalWidth = totalImgsWidth + gapWidth + arrowsWidth;

  if (totalWidth < containerMaxWidth) {
    galleryContainer.classList.add("shrink");
    arrowWrappers.forEach((arrow) => {
      arrow.style.display = "none";
    });
  } else {
    galleryContainer.classList.remove("shrink");
    arrowWrappers.forEach((arrow) => {
      arrow.style.display = "flex";
    });
    updateArrowStyling();
  }
}

// gallery scroll
galleryDisplay.addEventListener("scroll", updateArrowStyling);

function updateArrowStyling() {
  const leftArrow = arrowWrappers[0].querySelector("svg");
  const rightArrow = arrowWrappers[1].querySelector("svg");

  const currentProgress =
    galleryDisplay.scrollLeft /
    (galleryDisplay.scrollWidth - galleryDisplay.clientWidth);

  if (currentProgress <= 0.05) {
    leftArrow.style.stroke = "#979799";
    rightArrow.style.stroke = "black";
    arrowWrappers[0].classList.remove("clickable");
    arrowWrappers[1].classList.add("clickable");
  } else if (currentProgress >= 0.95) {
    leftArrow.style.stroke = "black";
    rightArrow.style.stroke = "#979799";
    arrowWrappers[1].classList.remove("clickable");
    arrowWrappers[0].classList.add("clickable");
  } else {
    leftArrow.style.stroke = "black";
    rightArrow.style.stroke = "black";
  }
}

arrowWrappers[0].onclick = function () {
  galleryDisplay.scrollLeft -= galleryDisplay.offsetWidth;
};
arrowWrappers[1].onclick = function () {
  galleryDisplay.scrollLeft += galleryDisplay.offsetWidth;
};

// side bar buttons
document.querySelectorAll(".clickable").forEach((element) => {
  element.addEventListener("click", () => {
    // deselect other clickable elements
    document.querySelectorAll(".clickable").forEach((deselectedElement) => {
      deselectedElement.classList.remove("selected");
    });
    if (mobileSpecificInfo) {
      closeDirectory();
    }
    element.classList.add("selected");
    loadSection(element.textContent.trim());
  });
});

loadSection(currentSectionName);

/*
 implement this once I have the mobile version in a nice spot...
const mobileQuery = window.matchMedia("(max-width: 479px)");

function setupMobileLayout(e) {
  if (e.matches) {
    // move sidebar into directory button, wire up toggle
  } else {
    // move it back / tear down listeners if needed
  }
}

mobileQuery.addEventListener("change", setupMobileLayout);
setupMobileLayout(mobileQuery); // run once on load too
*/
