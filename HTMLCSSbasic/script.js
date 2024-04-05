function toggleMobileNavbar() {
  var navbar = document.querySelector(".header-navbar-mobile");
  navbar.classList.toggle("mobile-open");
}

let cardIndex = 0;
const slides = document.querySelectorAll(".cource-card-item");
const progressElements = document.querySelectorAll(".cource-footer-progress");

let cardItemWidth = document.querySelector(".cource-list-card").offsetWidth;
let gap = 20;

console.log(cardIndex);

function updateCardDimensions() {
  cardItemWidth = document.querySelector(".cource-list-card").offsetWidth;
  showSlide(cardIndex);
}

window.addEventListener("resize", updateCardDimensions);

function updateFooterProgress(index) {
  progressElements.forEach((progress, i) => {
    if (i === index) {
      progress.classList.add("active");
    } else {
      progress.classList.remove("active");
    }
  });
}

function showSlide(index) {
  const offset = -(index * (cardItemWidth + gap));
  document.querySelector(
    ".cource-list-card"
  ).style.transform = `translateX(${offset}px)`;

  updateFooterProgress(index);
}

function prevSlide() {
  console.log(cardIndex);

  if (cardIndex <= 0) {
    return;
  }
  cardIndex--;
  showSlide(cardIndex);
}

function nextSlide() {
  console.log(cardIndex);

  const itemsPerSlide = 3;
  const maxIndex = Math.ceil(slides.length / itemsPerSlide) - 1;
  if (cardIndex >= maxIndex) {
    return;
  }
  cardIndex++;
  showSlide(cardIndex);
}

showSlide(cardIndex);
