/*------------------- contact form modal -------------------*/

const modal = document.querySelector(".modal-overlay");
const form = document.querySelector(".contact-form");
const formCompleteInfo = document.querySelector(".form-complete");
const formSubmitButton = form.querySelector('button[type="submit"]');

document.querySelectorAll(".contact-button").forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.add("active");
    form.classList.add("active");
    console.log("clicked contact button");
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

// side bar placement for different device widths
if (window.innerWidth < 480) {
  const directoryButtonContainer = document.querySelector(
    ".directory-button-container",
  );
  directoryButtonContainer.appendChild(document.querySelector(".side-bar"));
  directoryButtonContainer.style.display = "flex";
  mobileSpecificInfo = true;

  // mobile directory button functionality
  const directoryOverlay = document.querySelector(".directory-overlay");
  const directoryButton = document.querySelector(".directory-button");
  const sidebar = document.querySelector(".side-bar");
  const buttonSpacer = document.querySelector(".button-spacer");

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

  function closeDirectory() {
    directoryOverlay.classList.remove("active");
    sidebar.style.display = "none";
    directoryButton.classList.remove("directory-button-open");
    document.body.classList.remove("no-scroll");
    buttonSpacer.style.display = "none";
  }
} else {
  document.querySelector(".directory-button-container").style.display = "none";
}

/*------------------- main content management -------------------*/

const sections = {
  Info: {
    title: "Info",
    subtitle: "",
    description: `
    <div>
      <div>
        <p>Nat Ware is a photographer originally from the Pacific Northwest now living in Chicago.</p>
        <p>They hold a B.F.A. from the School of the Art Institute of Chicago.</p>
        <p>They also help run Amateur Press, a small independent photobook press.</p> 
        <p>---</p>
      </div>
      <img src="images/unnamed.jpg"/>
    </div>`,
    folder: null,
    images: [],
  },
  CV: {
    title: "CV",
    subtitle: "",
    description: `
    <div>
      <p>Solo Exhibitions:</p>
      <p>&emsp;2019, StudioUs, <em>Nat Ware</em>, Chicago, IL</p>
      <br>
      <p>Duo Exhibitions:</p>
      <p>&emsp;2024, The Second Room, <em>To What End</em>, Chicago, IL - in collaboration with Jordan Keyes</p>
      <br>
      <p>Group Exhibitions:</p>
      <p>&emsp;2026, University of Arkansas, <em>Deflate</em>, Fayettville, AR</p>
      <p>&emsp;2025, Treehouse, <em>Corpora/Simulacrum</em>, Chicago, IL</p>
      <p>&emsp;2025, Parlour and Ramp, <em>Through the Lens: An Analog Perspective</em>, Chicago, IL</p>
      <p>&emsp;&emsp;- exhibition extended and moved to Bellows Film Lab, Chicago, IL</p>
      <p>&emsp;2022, Mana Contemporary, <em>Unmoored</em>, Chicago, IL</p>
      <p>&emsp;2022, SAIC Galleries, <em>Fall Undergraduate Show</em>, Chicago, IL</p>
      <p>&emsp;2022, The Great Frame Up, <em>The Klitzky Art Show</em>, Chicago, IL</p>
      <p>&emsp;2022, ExTV, <em>Selected Ambient Works - Vol. 0</em>, Chicago, IL</p>
      <p>&emsp;2020, CICA Museum, <em>Youth #7</em>, Gyeonggi-do, South Korea</p>
      <p>&emsp;2019, Gadabout, <em>Artists for Asylum Expo</em>, Chicago, IL</p>
      <p>&emsp;2019, School of the Art Institute of Chicago, <em>ArtBash</em>, Chicago, IL</p>
      <p>&emsp;2017, Open Signal, <em>Echo AiR Winter Showcase</em>, Portland, OR</p>
      <p>&emsp;2016, U and E, <em>Echo AiR Spring Showcase</em>, Portland, OR</p>
      <p>&emsp;2016, Disjecta, <em>Echo AiR Winter Showcase</em>, Portland, OR</p>
      <p>&emsp;2015, Jordan Schnitzer Museum of Art, <em>NewArt Northwest</em>, Eugene, OR</p>
      <br>
      <p>Published Works:</p>
      <p>&emsp;<em>The Light Gets In</em>, Amateur Press, June 2025</p>
      <p>&emsp;<em>Northwest South Road</em>. General Things Press, November 2024.</p>
      <br>
      <p>Publication Features:</p>
      <p>&emsp;<em>Borderline Press</em>. Volume 1. April 2022.</p>
      <p>&emsp;<em>The Jade Plant Project</em>. Volume 7, April 2022.</p>
      <p>&emsp;"(de)construction" Revue Feu. February, 2021.</p>
      <p>&emsp;<em>SAIC Photography Catalog</em>. 11th Edition, June 2020.</p>
      <p>&emsp;<em>Collective Terrain</em>. Volume 1, December 2018.</p>
      <p>&emsp;"Finalists" <em>Photographer's Forum Best of High School and College Photography</em>. Spring 2018.</p>
      <p>&emsp;"Finalists" <em>Photographer's Forum Best of High School and College Photography</em>. Spring 2016.</p>
    </div>`,
    folder: null,
    images: [],
  },
  "The Light Gets In": {
    title: "The Light Gets In",
    subtitle: "published by Amateur Press June 2025",
    description: `
    <div>
    <p class="no-padding-no-margin">Images build through repetition, erasure, overlay. The surface of the work is a site of accumulation. Rust, residue, gesture all sit in relation in these images. The Light Gets In reads as a visual whisper, modest in scale, but precise in its resonance. It’s less about declaring a moment, and more about holding space for one to emerge. What’s revealed isn’t the scene itself, but how the artist moves through it carefully, and responsively, which highlights the relationship between place and memory. What is prescribed and overlaid versus what is inherited and naturalized.</p>
    <br>
    <a
      href="https://amateur-press.com/the-light-gets-in"
      target="_blank"
      class="grey-background"
      >Order here</a
    >
    </div>`,
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
    description: `
    <div>
    <p class="no-padding-no-margin">Northwest South Road" by Nat Ware was published in 2024 by General Things Press. The small risographed perfect bound book is 81 pages long, and about 4 1/2" x 5 1/2". The work is composed of photographs taken by Ware during a return trip to their family's home in August 2023. The images feature roadside textures, blackberry bushes at night, birds, and shifting light. The photos resist the notion of landscape as a static subject. Instead, they propose a different kind of record: one grounded in motion, attention, and memory. These are not definitive views, but passing ones, and the photographic frame offers both clarity and interruption. The camera becomes a participant in the landscape rather than a tool of capture. The photographs operate simultaneously as documentation and notation—marking both external details and internal rhythms. Here, the act of looking is inseparable from the terrain itself: slow, searching, and subject to change. Northwest South Road invites viewers into a geography shaped not just by location, but by return, by the way memory travels through space, and how the familiar continues to shift beneath the surface of close observation.</p>
    <br>
    <a
      href=""
      target="_blank"
      class="grey-background"
      >Order here</a
    >
    </div>`,
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
    folder: "photography/2026/",
    images: [
      "ankara 2 copy.jpg",
      "ankara 5 copy.jpg",
      "ankara 7 copy.jpg",
      "ankara window copy.jpg",
      "antalya beach 2 copy.jpg",
      "antalya beach bw.jpg",
      "antalya blurry wall.jpg",
      "antalya bw 3 figures copy.jpg",
      "antalya bw broken window copy.jpg",
      "antalya net bw 2 copy.jpg",
      "antalya water bw 1.jpg",
      "turkey car 1 copy.jpg",
    ],
  },
  2025: {
    title: "Photography",
    subtitle: "2025",
    description: "",
    folder: "photography/2025/",
    images: [
      "Copy of vacant lot portland 1 copy.jpg",
      "Copy of vacant lot portland 16 copy 2.jpg",
      "Copy of vacant lot portland 5 copy.jpg",
      "Copy of vacant lot portland 9 copy.jpg",
      "Copy of vacant-lot-portland-20-copy.jpg",
      "vacant lot portland 1 copy.jpg",
      "vacant lot portland 12 copy.jpg",
      "vacant lot portland 14.jpg",
      "vacant lot portland 3 copy.jpg",
    ],
  },
  2024: {
    title: "Photography",
    subtitle: "2024",
    description: "",
    folder: "photography/2024/",
    images: [
      "90F94111-49B2-41B5-8F7C-3171FB056864.jfif",
      "CyanotypeStudy_1_NW.jpeg.jpeg",
      "CyanotypeStudy_3_NW.jpeg.JPG",
      "IMG_3209 (1).jpg",
      "IMG_9817 (1).jpg",
      "jasper-landscape-2.jfif",
      "lily foster beach 6 copy.jpg",
      "parking garage minneapolis copy.jpg",
      "reflection self portrait copy.jpg",
    ],
  },
  2023: {
    title: "Photography",
    subtitle: "2023",
    description: "",
    folder: "photography/2023/",
    images: [
      "arcanite-1.jpg",
      "arcanite-10.jpg",
      "arcanite-12.jpg",
      "arcanite-13.jpg",
      "arcanite-14.jpg",
      "arcanite-15.jpg",
      "arcanite-2.jpg",
      "arcanite-5.jpg",
      "arcanite-8.jpg",
      "bird-and-plane-copy.jpg",
      "dust-behind-truck-1-copy.jpg",
      "IMG_8678 (1).png",
    ],
  },
  "2018 - 2022": {
    title: "Photography",
    subtitle: "2018 - 2022",
    description: "",
    folder: "photography/2018-2022/",
    images: [
      "70C3FE16-6E43-4188-AE90-5C1103F5E961 (1).jpg",
      "blurred-bed-darkroom.jfif",
      "climbing-in-columbus (1).jpg",
      "IMG_2038.jfif",
      "unnamed (1).jpg",
      "unnamed (2).jpg",
      "unnamed (3).jpg",
      "unnamed (4).jpg",
      "unnamed (5).jpg",
      "unnamed (6).jpg",
      "unnamed (7).jpg",
      "unnamed.png",
      "Ware--Nat-01--Fraught-Distances.jpeg",
      "Ware--Nat-06--Fraught-Distances.jpeg",
      "Ware--Nat-07--Fraught-Distances.jpg",
      "Ware--Nat-08--Monticello (2).jpeg",
      "Ware--Nat-12--Jen (1).jpeg",
      "Ware--Nat-16--Rabbit-Walk (1).jpeg",
      "Ware--Nat-18--Rabbit-Walk (1).jpeg",
      "Ware_Nat_4.jpg",
    ],
  },
  "2023 - 2026": {
    title: "Painting & Mixed Media",
    subtitle: "2023 - 2026",
    description: "",
    folder: "painting-and-mixed-media/2023-2026/",
    images: [
      "grid study 1.jpg",
      "IMG_3294 (1).jpeg",
      "IMG_3663 (1) copy.jpg",
      "NAT019 copy.jpg",
      "unnamed-10 (2).jpg",
    ],
  },
  "To What End": {
    title: "To What End --- with Jordan Keyes at the Second Room",
    subtitle: "September September 20, 2024 - June 13, 2025",
    description:
      "To What End is a duo exhibition showcasing textiles and photographs by presenting artists Nat Ware and Jordan Keyes. Studying themes of solitude, human connection, and the surrounding landscape, their works exist as mirrors to each other. The artists observe the natural work as not just the lived environment, but the relationships built with others - or lack thereof. Black and white images of trees, birds, and doorways- most in darkness- reveal small fragments of land while passing through. Viewers encounter a dominating quilted denim textile that evokes the captivating moment of light and shadow dancing over the water. To What End seeks to draw meaning and solace form this convergence of solitary moments.",
    folder: "selected-exhibitions/to-what-end/",
    images: [
      "towhatend-1.jpeg",
      "towhatend-2.jpeg",
      "towhatend-3.jpeg",
      "towhatend-5.jpeg",
      "towhatend-6.jpeg",
    ],
  },
  Unmoored: {
    title: "Unmoored --- group show at Mana Contemporary",
    subtitle: "November 18th - December 2nd, 2022",
    description: `<div>
      <p class="no-padding-no-margin">Senior capstone exhibition presented by the Department of Photography at SAIC. Presented at Mana Contemporary in Chicago, IL. all done with the help and guidance of Aimee Beaubien.</p>
      <p>Featured Artists: Andrew Boynton, Bonnie Campbell, Jude Cuesta, Rose Cunningham, Mercel Kristin Curioso, Santiago Diez, Erin Fesmire, Mihye Kang, Nell Kessenich, Katie Murray, Angelica Ong, Vrisha Patel, Brennen Rhoades, Grace Rowland, Nat Ware.</p>
    </div>
`,
    folder: "selected-exhibitions/unmoored/",
    images: [
      "unmoored 1.jpg",
      "unmoored 2.jpg",
      "unmoored 3.jpg",
      "unmoored 4.jpg",
      "unmoored 5.jpg",
      "unmoored 6.jpg",
      "unmoored 7.jpg",
      "unmoored 8.jpg",
      "unmoored 9.jpg",
      "unmoored 10.jpg",
    ],
  },
};

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const container = document.getElementById("container");
const description = document.getElementById("description");
const visualsContainer = document.getElementById("visuals-container");
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
  if (section.title == "Info" && mobileSpecificInfo) {
    document.body.classList.add("mobile-exception");
    document.querySelectorAll(".mobile-info-only").forEach((element) => {
      element.style.display = "flex";
    });
  } else {
    document.body.classList.remove("mobile-exception");
    document.querySelectorAll(".mobile-info-only").forEach((element) => {
      element.style.display = "none";
    });
  }

  // on mobile, copyright only includes site attribution on info page
  const copyright = document.querySelector(".copyright");
  if (mobileSpecificInfo) {
    if (section.title == "Info") {
      copyright.textContent = "© 2026 Nat Ware --- site by JS";
    } else {
      copyright.textContent = "© 2026 Nat Ware";
    }
  } else {
    copyright.textContent = "© 2026 Nat Ware --- site by JS";
  }

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
    description.innerHTML = section.description;
  } else {
    description.style.display = "none";
  }
  // set gallery imgs
  if (window.innerWidth < 480) {
    mainImage.src = "";
    mainImage.style.display = "none";
    galleryContainer.style.display = "none";
    visualsContainer.style.display = "flex";
    verticalGallery.innerHTML = "";

    section.images.forEach((image, index) => {
      const img = document.createElement("img");
      img.src = "images/" + section.folder + image;
      img.classList.add("stacked-img");
      verticalGallery.appendChild(img);
    });
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
    const visualsContainerWidth = visualsContainer.offsetWidth; // setting before images load into container
    // set up images
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
