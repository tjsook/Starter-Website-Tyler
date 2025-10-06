[
  ["scroll-hooper", "hooper-target"],
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
