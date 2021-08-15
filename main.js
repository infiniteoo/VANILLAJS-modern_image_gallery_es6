const [current, imgs] = [
  document.querySelector("#current"),
  document.querySelectorAll(".imgs img"),
];

const opacity = 0.4;

imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  // reset the opacity
  imgs.forEach((img) => (img.style.opacity = 1));

  // change current image to src of clicked image
  current.src = e.target.src;

  // change the opacity to opacity var
  e.target.style.opacity = opacity;
}
