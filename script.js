(function() {

  "use strict";
  // Making a slideshow with the images;

  const myImages = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg", "img6.jpg", "img7.jpg"];

  let currentImage = 0;

// Handling the next button;

  document.getElementById("next").addEventListener("click", function() {
    currentImage++;
    if(currentImage > myImages.length - 1){currentImage = 0};
    document.getElementById("myImage").src = myImages[currentImage];

  });
  
  // Handling the previous button;

  document.getElementById("previous").addEventListener("click", function() {
    currentImage--;
    if (currentImage < 0) {currentImage = myImages.length - 1}
    document.getElementById("myImage").src = myImages[currentImage];
  });
  
})();
  
  