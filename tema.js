document.querySelectorAll("[data-slideshow]").forEach((slideshowEl) => {
  const slides = slideshowEl.querySelectorAll("[data-slide]");
  const nextBtn = slideshowEl.querySelector("[data-next]");
  const prevBtn = slideshowEl.querySelector("[data-prev]");

  if (!slides.length) return;

  let index = 0;

  function show(i) {
    index = (i + slides.length) % slides.length; // wrap-around
    slides.forEach((s) => s.classList.remove("is-active"));
    slides[index].classList.add("is-active");
  }

  show(0);

  nextBtn?.addEventListener("click", () => show(index + 1));
  prevBtn?.addEventListener("click", () => show(index - 1));
});
