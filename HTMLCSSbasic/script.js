const headerBarBtn = document.querySelector(".header-bar-btn");
const slides = document.querySelectorAll(".course-card-item");
const progressElements = document.querySelectorAll(".course-footer-progress");
const prevCourseBtn = document.querySelector(".course-prev-btn");
const nextCourseBtn = document.querySelector(".course-next-btn");
let cardItemWidth = document.querySelector(".course-list-card");
let cardIndex = 0;
const GAP = 20;
const ITEM_PER_SLIDE = 3;

function toggleMobileNavbar() {
  const navbarMobile = document.querySelector(".header-navbar-mobile");
  navbarMobile.classList.toggle("mobile-open");
}

function updateCardDimensions() {
  cardItemWidth = cardItemWidth.offsetWidth;
  showSlide(cardIndex);
}

function updateFooterProgress(index) {
  progressElements.forEach((progress, i) => {
    progress.classList.toggle("active", i === index);
  });
}

function showSlide(index) {
  const offset = -(index * (cardItemWidth.offsetWidth + GAP));
  cardItemWidth.style.transform = `translateX(${offset}px)`;

  updateFooterProgress(index);
}

function handlePrevCourseClick() {
  if (cardIndex > 0) {
    cardIndex--;
    showSlide(cardIndex);
  }
}

function handleNextCourseClick() {
  const maxIndex = Math.ceil(slides.length / ITEM_PER_SLIDE) - 1;
  if (cardIndex < maxIndex) {
    cardIndex++;
    showSlide(cardIndex);
  }
}

// Event listeners
window.addEventListener("resize", updateCardDimensions);
headerBarBtn.addEventListener("click", toggleMobileNavbar);
prevCourseBtn.addEventListener("click", handlePrevCourseClick);
nextCourseBtn.addEventListener("click", handleNextCourseClick);

// Initial setup
showSlide(cardIndex);
