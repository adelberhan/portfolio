// active hamburger menu
function hamburgerMenu() {
  let menuIcon = document.querySelector(".menu-icon");
  let navlist = document.querySelector(".navlist");
  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
    navlist.classList.toggle("active");
    document.body.classList.toggle("open");
  });

  // remove navlist
  navlist.addEventListener("click", () => {
    navlist.classList.remove("active");
    menuIcon.classList.remove("active");
    document.body.classList.remove("open");
  });

  // rotate text js code
  // let text = document.querySelector(".text p");

  // text.innerHTML = text.innerHTML
  //   .split("")
  //   .map((char, i) => `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`)
  //   .join("");

  // switch between about buttons

  const buttons = document.querySelectorAll(".about-btn button");
  const contents = document.querySelectorAll(".content");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      contents.forEach((content) => (content.style.display = "none"));
      contents[index].style.display = "block";
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // portfolio fillter

  // var mixer = mixitup(".portfolio-gallery", {
  //   selectors: {
  //     target: ".portfolio-box",
  //   },
  //   animation: {
  //     duration: 500,
  //   },
  // });

  // Initialize swiperjs

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  //   skill Progress bar

  const first_skill = document.querySelector(".skill:first-child");
  const sk_counters = document.querySelectorAll(".counter span");
  const progress_bars = document.querySelectorAll(".skills svg circle");

  // window.addEventListener("scroll", () => {
  //   if (!skillsPlayed) skillsCounter();
  // });

  // function hasReached(el) {
  //   // let topPosition = el.getBoundingClientRect().top;
  //   // if (window.innerHeight >= topPosition + el.offsetHeight) return true;
  //   // return false;

  //   if (!ref.current) return;
  //   if (ref.current.getBoundingClientRect().y <= -580 || null) {
  //     console.log(ref.current.getBoundingClientRect().y);

  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // }

  function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = currentNum + 1;
      setTimeout(() => {
        updateCount(num, maxNum);
      }, 12);
    }
  }

  let skillsPlayed = false;

  // function skillsCounter() {
  //   if (!hasReached(first_skill)) return;
  //   skillsPlayed = true;
  //   sk_counters.forEach((counter, i) => {
  //     let target = +counter.dataset.target;
  //     let strokeValue = 465 - 465 * (target / 100);

  //     progress_bars[i].style.setProperty("--target", strokeValue);

  //     setTimeout(() => {
  //       updateCount(counter, target);
  //     }, 400);
  //   });

  //   progress_bars.forEach(
  //     (p) => (p.style.animation = "progress 2s ease-in-out forwards")
  //   );
  // }

  // side progress bar

  let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;

    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#fff ${scrollValue}%,#3d99be ${scrollValue}%)`;
  };

  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;

  // active menu

  let menuLi = document.querySelectorAll("header ul li a");
  let section = document.querySelectorAll("section");

  function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len].offsetTop) {}
    menuLi.forEach((sec) => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
  }
  activeMenu();
  window.addEventListener("scroll", activeMenu);

  // scroll reveal

  ScrollReveal({
    distance: "90px",
    duration: 2000,
    delay: 200,
    // reset: true ,
  });

  ScrollReveal().reveal(".hero-info,.main-text,.proposal,.heading", {
    origin: "top",
  });
  ScrollReveal().reveal(".about-img,.fillter-buttons,.contact-info", {
    origin: "top",
  });
  ScrollReveal().reveal(".about-content,.skills", { origin: "top" });
  // ScrollReveal().reveal(
  //   ".allServices,.portfolio-gallery,.blog-box,footer,.img-hero",
  //   { origin: "bottom" }
  // );

  // const typed = select(".typed");
  // if (typed) {
  //   let typed_strings = typed.getAttribute("data-typed-items");
  //   typed_strings = typed_strings.split(",");
  //   new Typed(".typed", {
  //     strings: typed_strings,
  //     loop: true,
  //     typeSpeed: 100,
  //     backSpeed: 50,
  //     backDelay: 2000,
  //   });
  // }
}

// document.addEventListener("DOMContentLoaded", function() {
//   const filterButtons = document.querySelectorAll(".filter-buttons .button");
//   const portfolioBoxes = document.querySelectorAll(".portfolio-box");

  // filterButtons.forEach(button => {
  //   button.addEventListener("click", function() {
  //     const filterValue = this.getAttribute("data-filter");

  //     filterButtons.forEach(btn => btn.classList.remove("active"));
  //     this.classList.add("active");

  //     portfolioBoxes.forEach(box => {
  //       if (filterValue === "all") {
  //         box.classList.add("mix");
  //       } else if (box.classList.contains(filterValue)) {
  //         box.classList.add("mix");
  //       } else {
  //         box.classList.remove("mix");
  //       }
  //     });
  //   });
  // });
// });


  // document.addEventListener("DOMContentLoaded", function () {
  //   // Initialize MixItUp
  //   var mixer = mixitup('.portfolio-gallery', {
  //     selectors: {
  //       target: '.card',
  //     },
  //     animation: {
  //       duration: 300,
  //     },
  //   });
  // });

