const slideIds = ["slider1", "slider2", "slider3"];
let currentIndex = 0;

function showSlide(index) {
  slideIds.forEach((id, i) => {
    const slide = document.getElementById(id);
    if (i === index) {
      slide.classList.remove("hide");
      slide.classList.add("show", "animate-slide-in-right");
      slide.classList.remove("slide-out-left");
    } else {
      slide.classList.remove("slide-in-right", "show");
      slide.classList.add("hide");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideIds.length;
  showSlide(currentIndex);
}

// Change slide every 3 seconds
setInterval(nextSlide, 3000);
showSlide(currentIndex); // Show the first 

export { slideIds, currentIndex, showSlide, nextSlide };