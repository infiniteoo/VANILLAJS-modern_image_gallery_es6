const [current, imgs] = [
  document.querySelector("#current"),
  document.querySelectorAll(".imgs img"),
];
imgs.forEach((img) => img.addEventListener("click", imgClick));

function imgClick(e) {
  current.src = e.target.src;
}
