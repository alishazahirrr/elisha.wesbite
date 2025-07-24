// --- Carousel Logic ---
const track = document.getElementById('elishaCarouselTrack');
const leftBtn = document.querySelector('.elisha-arrow-left');
const rightBtn = document.querySelector('.elisha-arrow-right');

let currentIndex = 0;

function updateCarousel() {
  const screenWidth = window.innerWidth;
  let itemsPerView = 4;
  let itemWidthPercent = 25; // default: 4 items = 25% each

  if (screenWidth <= 992 && screenWidth > 600) {
    itemsPerView = 2;
    itemWidthPercent = 50;
  }

  if (screenWidth <= 600) {
    itemsPerView = 1;
    itemWidthPercent = 100;
  }

  const totalItems = track.children.length;
  const maxIndex = totalItems - itemsPerView;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const translateX = -(currentIndex * itemWidthPercent);
  track.style.transform = `translateX(${translateX}%)`;
}

rightBtn?.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

leftBtn?.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// ✅ THUMBNAIL IMAGE SWITCHER
window.addEventListener("DOMContentLoaded", () => {
  const thumbnails = document.querySelectorAll(".thumbnails img");
  const mainImage = document.getElementById("mainImage");

  thumbnails.forEach((thumb) => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;

      thumbnails.forEach((t) => t.classList.remove("active-thumb"));
      thumb.classList.add("active-thumb");
    });
  });

  updateCarousel(); // If you're using carousel logic, keep this
});

// ✅ QUANTITY BUTTON LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const quantityInput = document.getElementById("quantity");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");

  increaseBtn.addEventListener("click", () => {
    quantityInput.value = parseInt(quantityInput.value) + 1;
  });

  decreaseBtn.addEventListener("click", () => {
    if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  });
});

