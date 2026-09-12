// ---- Live clock (matches the "MILAN 15:40" touch from the reference) ----
// Change the timeZone and label to your own city.
const CITY_LABEL = "Your City";
const TIME_ZONE = "Europe/Rome"; // e.g. "Asia/Kolkata", "America/New_York"

function updateClock() {
  const now = new Date();
  const time = new Intl.DateTimeFormat("en-GB", {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
  }).format(now);
  const text = `${CITY_LABEL} · ${time}`;
  const nav = document.getElementById("clock");
  const footer = document.getElementById("clock-footer");
  if (nav) nav.textContent = text;
  if (footer) footer.textContent = text;
}
updateClock();
setInterval(updateClock, 30000);

// ---- Footer year ----
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---- Video lightbox ----
const lightbox = document.getElementById("lightbox");
const lightboxVideo = document.getElementById("lightboxVideo");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".work__card").forEach((card) => {
  card.addEventListener("click", () => {
    const src = card.dataset.video;
    const title = card.dataset.title || "";
    lightboxVideo.src = src;
    lightboxTitle.textContent = title;
    lightbox.classList.add("open");
    lightboxVideo.play();
  });
});

function closeLightbox() {
  lightbox.classList.remove("open");
  lightboxVideo.pause();
  lightboxVideo.removeAttribute("src");
  lightboxVideo.load();
}
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});

// ---- Mobile nav toggle ----
const burger = document.getElementById("burger");
const links = document.querySelector(".nav__links");
if (burger && links) {
  burger.addEventListener("click", () => {
    links.classList.toggle("open");
  });
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}
