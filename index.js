function main() {
  // Slider 1
  const mainSlider_1 = new Splide("#slider_1", {
    type: "loop",
    pagination: false,
    autoplay: true,
  });
  const thumbnailsSlider_1 = new Splide("#thumbnail_slider_1", {
    fixedWidth: 120,
    fixedHeight: 100,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    arrows: false,
  });

  mainSlider_1.sync(thumbnailsSlider_1);
  mainSlider_1.mount();
  thumbnailsSlider_1.mount();

  // Slider 2
  const mainSlider_2 = new Splide("#slider_2", {
    type: "loop",
    perPage: 1.5,
    perMove: 1,
    autoplay: true,
    gap: 10,
  });
  mainSlider_2.mount();

  // Slider 3
  const mainSlider_3 = new Splide("#slider_3", {
    type: "loop",
    perPage: 1,
    autoplay: true,
  });
  mainSlider_3.mount();
}
main();
