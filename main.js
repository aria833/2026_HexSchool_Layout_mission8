import "./assets/scss/all.scss";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Hello world");

//精選房源輪播
const swiper = new Swiper(".swiper", {
  // 分頁、左右箭頭、滾動條若有使用則必需設定
  // 分頁
  pagination: {
    el: ".swiper-pagination",
  },
  // 左右箭頭
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // 滾動條
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

//手機版滑過特定區域前，將按鈕鎖定在下方
const mobileCalculateBtn = document.querySelector(
  ".mobile-calculate-btn, .mobile-house-btn",
);
const contactArea = document.querySelector(".contact-area");
const observer = new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      mobileCalculateBtn.classList.add("is-hidden");
    } else {
      mobileCalculateBtn.classList.remove("is-hidden");
    }
  },
  {
    threshold: 0.1,
  },
);

observer.observe(contactArea);

//圖片燈箱效果
import PhotoSwipeLightbox from "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe-lightbox.esm.min.js";
import PhotoSwipe from "https://cdn.jsdelivr.net/npm/photoswipe@5.4.4/dist/photoswipe.esm.min.js";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#image-gallery",
  children: "a",
  pswpModule: PhotoSwipe,
});
lightbox.init();
