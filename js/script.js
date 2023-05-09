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
      keyPress:false,
      enableSwipe:false,
      enableThumbSwipe:false,
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


  /* --------------- */

  /* default */
let selected = "fl-302";
document.getElementById("project-301").style.display="none";
document.getElementById("project-302").style.display="flex";
document.querySelectorAll(".fl-301").forEach(function(el) {
  el.style.display="none";
});
document.getElementById("fl-302-button").classList.add("active");




document.getElementById("fl-301-button").onclick = function() {
  selected = "fl-301";
  update_content();
}

document.getElementById("fl-302-button").onclick = function() {
  selected = "fl-302";
  update_content();
}

function update_content() {
  if (selected == "fl-301") {
    document.querySelectorAll(".fl-301").forEach(function(el) {
      el.style.display="block";
     
    });
/*     document.querySelectorAll(".fl-301").style.display="none"; */
  
    document.querySelectorAll(".fl-302").forEach(function(el) {
      el.style.display="none";
    });

    document.getElementById("fl-301-button").classList.add("active");
    document.getElementById("fl-302-button").classList.remove("active");
    document.getElementById("project-301").style.display="flex";
    document.getElementById("project-302").style.display="none";
   
  } else if (selected == "fl-302") {
    document.querySelectorAll(".fl-301").forEach(function(el) {
      el.style.display="none";
    });

    document.querySelectorAll(".fl-302").forEach(function(el) {
      el.style.display="block";
    });

    document.getElementById("project-301").style.display="none";
    document.getElementById("project-302").style.display="flex";
    document.getElementById("fl-301-button").classList.remove("active");
    document.getElementById("fl-302-button").classList.add("active");
  }
}
