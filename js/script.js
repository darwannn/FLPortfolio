$(document).ready(function () {
    /* vanilla tilt */
    VanillaTilt.init(document.querySelectorAll(".gallery"), {
      glare: true,
      reverse: true,
      "max-glare": 0.5
    });

    /* light gallery */
    $('#lightgallery').lightGallery({
      thumbnail: false,
      animateThumb: false,
      caption: false,
      controls: false,
      showThumbnailWithPlayButton: false,
      share: false,
      autoplayControls: false,
      actualSize: false,
      showThumbByDefault: false,
      counter: false,
      progressBar: false,
      slideShowAutoplay: false,
      download: false,
      resetScrollPosition: true,
      caption: true,

    });
    $('#lightgallery').on('onBeforeOpen.lg', function (event, prevIndex, index) {
      $('body').css('overflow', 'hidden')
    });
    $('#lightgallery').on('onBeforeClose.lg', function (event, prevIndex, index) {
      $('body').css('overflow', 'auto')
    });

    /* back to top */
    let totop = document.querySelector("#back-to-top");
    totop.addEventListener("click", () => {
      console.log("click");
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    });

    window.addEventListener("scroll", function () {
      let scroll = this.scrollY;
      if (scroll < 100) {
        totop.style.visibility = "hidden";
        totop.style.opacity = "0";
      } else {
        totop.style.visibility = "visible";
        totop.style.opacity = "1";
      }
    });

    setTimeout(function(){
document.querySelector("html").style.overflow = "auto";
    });
  });