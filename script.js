document
  .getElementById("scroll-hooper")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document
      .getElementById("hooper-target")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  });
document
  .getElementById("scroll-musicphile")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document
      .getElementById("music-target")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  });
document.getElementById("scroll-human").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .getElementById("human-target")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});
document.getElementById("scroll-top").addEventListener("click", function (e) {
  e.preventDefault();
  document
    .getElementById("top-target")
    .scrollIntoView({ behavior: "smooth", block: "center" });
});
