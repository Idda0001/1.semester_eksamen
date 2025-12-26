document.querySelectorAll("[data-slideshow]").forEach((slideshowEl) => {
  const slides = slideshowEl.querySelectorAll("[data-slide]");
  let index = 0;

  function show(i) {
    // wrap-around
    if (i >= slides.length) index = 0;
    if (i < 0) index = slides.length - 1;

    slides.forEach((s) => s.classList.remove("is-active"));
    slides[index].classList.add("is-active");
  }

  // initial
  show(index);

  // knapper
  slideshowEl.querySelector("[data-next]").addEventListener("click", () => {
    index += 1;
    show(index);
  });

  slideshowEl.querySelector("[data-prev]").addEventListener("click", () => {
    index -= 1;
    show(index);
  });
});