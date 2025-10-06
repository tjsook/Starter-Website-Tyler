[
  ["scroll-friend", "friend-target"],
  ["scroll-musicphile", "music-target"],
  ["scroll-human", "human-target"],
  ["scroll-website", "website-target"],
  ["scroll-top", "top-target"],
  ["scroll-objectdetection", "objectdetection-target"],
].forEach(([btn, target]) => {
  const el = document.getElementById(btn);
  const tgt = document.getElementById(target);
  if (el && tgt) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      tgt.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const middleName = document.querySelector(".middle-name");
  if (middleName) {
    const originalText = middleName.textContent;
    let toggled = false;
    middleName.addEventListener("click", function () {
      if (!toggled) {
        middleName.textContent = "진수";
      } else {
        middleName.textContent = originalText;
      }
      toggled = !toggled;
    });
  }
});
