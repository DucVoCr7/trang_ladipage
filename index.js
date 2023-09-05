function main() {
  const mainSlider_1 = new Splide("#slider_1", {
    type: "loop",
    pagination: false,
    autoplay: true,
  });

  const thumbnailsSlider_1 = new Splide("#thumbnail_slider_1", {
    fixedWidth: 120,
    fixedHeight: 80,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    arrows: false,
    // breakpoints: {
    //   600: {
    //     fixedWidth: 60,
    //     fixedHeight: 44,
    //   },
    // },
  });

  mainSlider_1.sync(thumbnailsSlider_1);
  mainSlider_1.mount();
  thumbnailsSlider_1.mount();
}
main();
