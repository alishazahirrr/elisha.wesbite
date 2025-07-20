const track = document.getElementById('elishaCarouselTrack');
const leftBtn = document.querySelector('.elisha-arrow-left');
const rightBtn = document.querySelector('.elisha-arrow-right');

let currentIndex = 0;

function updateCarousel() {
  const screenWidth = window.innerWidth;
  let itemsPerView = 4;
  let itemWidthPercent = 25; // default: 4 items = 25% each

  // ✅ Medium screens
  if (screenWidth <= 992 && screenWidth > 600) {
    itemsPerView = 2;
    itemWidthPercent = 50; // 2 items
  }

  // ✅ Small screens
  if (screenWidth <= 600) {
    itemsPerView = 1;
    itemWidthPercent = 100; // 1 item full width
  }

  const totalItems = track.children.length;
  const maxIndex = totalItems - itemsPerView;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  // ✅ Apply transform
  const translateX = -(currentIndex * itemWidthPercent);
  track.style.transform = `translateX(${translateX}%)`;
}

// ✅ Buttons
rightBtn.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

leftBtn.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});

// ✅ On resize and first load
window.addEventListener('resize', updateCarousel);
updateCarousel();
