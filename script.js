document.querySelectorAll(".clickable").forEach((element) => {
  element.addEventListener("click", () => {
    // deselect other clickable elements
    document.querySelectorAll(".clickable").forEach((deselectedElement) => {
      deselectedElement.classList.remove("selected");
    });
    element.classList.add("selected");
  });
});
