// slider.js
document.addEventListener("DOMContentLoaded", () => {
    const mask       = document.querySelector(".our_products .w-slider-mask");
    const slides     = Array.from(mask.querySelectorAll(".slide"));
    const leftArrow  = document.querySelector(".our_products .w-slider-arrow-left");
    const rightArrow = document.querySelector(".our_products .w-slider-arrow-right");
    const navDots    = document.querySelectorAll(".our_products .slider-nav .nav-dot");
    let current      = 0;
    const total      = slides.length;
  
    function goTo(idx) {
      // wrap into [0..total-1]
      current = idx % total;
  
      // slide the mask
      mask.style.transform = `translateX(-${current * 100}%)`;
  
      // update dots
      navDots.forEach(dot =>
        dot.classList.toggle(
          "active",
          Number(dot.dataset.index) - 1 === current
        )
      );
    }
  
    // arrows
    leftArrow .addEventListener("click", () => goTo(current - 1));
    rightArrow.addEventListener("click", () => goTo(current + 1));
  
    // dots
    navDots.forEach(dot =>
      dot.addEventListener("click", () => {
        const idx = Number(dot.dataset.index) - 1;
        goTo(idx);
      })
    );
  
    // init + optional autoplay
    goTo(0);
    //setInterval(() => goTo(current + 1), 4000);
  });
  