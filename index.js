function main() {
  // Slider 1
  const mainSlider_1 = new Splide("#slider_1", {
    type: "loop",
    pagination: false,
    speed: 1000,
    interval: 2000,
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
    pagination: false,
    interval: 2000,
    speed: 1000,
    gap: 10,
  });
  mainSlider_2.mount();

  // Slider 3
  const mainSlider_3 = new Splide("#slider_3", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 6000,
    speed: 1000,
  });
  mainSlider_3.mount();

  // Slider 4
  const mainSlider_4 = new Splide("#slider_4", {
    type: "loop",
    perPage: 1,
    autoplay: true,
    interval: 6000,
    speed: 1000,
  });
  mainSlider_4.mount();

  // Time DESC
  function countDown1Second(numberHour) {
    let numberSecond = numberHour * 60 * 60;
    const elementHour = document.getElementById("hour");
    const elementMinute = document.getElementById("minute");
    const elementSecond = document.getElementById("second");
    setInterval(() => {
      numberSecond--;
      if (numberSecond < 0) {
        numberSecond = numberHour * 60 * 60;
      }
      const hour = Math.floor(numberSecond / (60 * 60));
      const minute = Math.floor((numberSecond - hour * 60 * 60) / 60);
      const second = numberSecond - hour * 60 * 60 - minute * 60;
      elementHour.innerHTML = hour > 9 ? hour : `0${hour}`;
      elementMinute.innerHTML = minute > 9 ? minute : `0${minute}`;
      elementSecond.innerHTML = second > 9 ? second : `0${second}`;
    }, 1000);
  }
  countDown1Second(12);

  // Xử lí button
  const listBtnFacebook = document.querySelectorAll("#btn_facebook");
  const listBtnZalo = document.querySelectorAll("#btn_zalo");
  listBtnFacebook.forEach((element) => {
    element.onclick = () => {
      window.open(
        "fb://facewebmodal/f?href=https://www.facebook.com/dietmocungtrang1?mibextid=ZbWKwL"
      );
    };
  });
  listBtnZalo.forEach((element) => {
    element.onclick = () => {
      window.open("https://zalo.me/0967602036");
    };
  });

  // Xủ lí phone, cart button
  const elementBtnPhone = document.getElementById("button_phone");
  elementBtnPhone.onclick = () => {
    window.open("tel:0967602036");
  };
  const elementBtnCart = document.getElementById("button_cart");
  elementBtnCart.onclick = () => {
    window.open(
      "fb-messenger://facewebmodal/f?href=https://www.facebook.com/dietmocungtrang1?mibextid=ZbWKwL"
    );
  };
}
main();
