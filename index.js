document
  .querySelector(".ultimate-3d-button")
  .addEventListener("mouseenter", function () {
    document.querySelector(".button-text").textContent = "Click Me"; // Change text on hover
  });

document
  .querySelector(".ultimate-3d-button")
  .addEventListener("mouseleave", function () {
    document.querySelector(".button-text").textContent = "Hover Me"; // Revert text when hover ends
  });
