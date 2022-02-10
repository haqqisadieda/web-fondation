const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll(".slider");
M.Slider.init(slider, {
  indicators: false,
  height: 700,
  transition: 600,
  interval: 3000,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const materialbox = document.querySelectorAll(".materialboxed");
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
  scrollOffset: 55,
});

const carousel = document.querySelectorAll(".carousel.carousel-slider");
M.Carousel.init(carousel, {
  fullWidth: true,
  indicators: true,
  duration: 150,
});

setInterval(function () {
  M.Carousel.getInstance(carousel[0]).next();
}, 5000);

const body = document.querySelector("body");
const hamburger = document.querySelector("#btnHamburger");
const wrap = document.querySelector(".nav-wrapper");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

hamburger.addEventListener("click", function () {
  console.log("click hamburger");

  if (wrap.classList.contains("open")) {
    // Close Hamburger
    body.classList.remove("noscroll");
    wrap.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    body.classList.add("noscroll");
    wrap.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});
