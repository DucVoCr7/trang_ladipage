function Slider() {
  const carouselSlides = document.querySelectorAll(".slide");
  const btnPrev = document.querySelector(".prev");
  const btnNext = document.querySelector(".next");
  const dotsSlide = document.querySelector(".dots_container");
  console.log(dotsSlide, 999);
  let currentSlide = 0;

  const activeDot = function (slide) {
    document
      .querySelectorAll(".dot")
      .forEach((dot) => dot.classList.remove("active"));
    document
      .querySelector(`.dot[data-slide="${slide}"]`)
      .classList.add("active");
  };
  activeDot(currentSlide);

  const changeSlide = function (slides) {
    carouselSlides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slides)}%)`)
    );
    // console.log(dotsSlide.offsetWidth,);
    // console.log(slides, 999);
  };
  changeSlide(currentSlide);

  btnNext.addEventListener("click", function () {
    currentSlide++;
    if (carouselSlides.length - 1 < currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });
  btnPrev.addEventListener("click", function () {
    currentSlide--;
    if (0 >= currentSlide) {
      currentSlide = 0;
    }
    changeSlide(currentSlide);
    activeDot(currentSlide);
  });

  dotsSlide.addEventListener("click", function (e) {
    console.log(e, 888);
    if (e.target.classList.contains("dot")) {
      console.log(e.target.dataset.slide, 999);
      const slide = e.target.dataset.slide;
      changeSlide(slide);
      activeDot(slide);
    }
  });
}
Slider();
