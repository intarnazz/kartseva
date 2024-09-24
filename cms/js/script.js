const img = document.getElementById("img");
img.addEventListener("click", () => {
  open(img.getAttribute("data-url"), "popup", "width=800,height=800");
});
