new Accordion('.accordion-container')

const burger = document.querySelector(".burger")
const navMobile = document.querySelector(".nav-mobile")
const body = document.body;

burger.addEventListener("click", (e) => {
    body.classList.toggle("hidden")
    navMobile.classList.toggle("nav-mobile--open")
    burger.classList.toggle("burger--open")
})

const openSearchBtn = document.querySelector(".search-btn")
const closeSearchBtn = document.querySelector(".search-form__cancel")
const searchForm = document.querySelector(".search-form")

openSearchBtn.addEventListener("click", (e) => {
    body.classList.add("hidden")
    searchForm.classList.add("search-form--visible")
})

closeSearchBtn.addEventListener("click", (e) => {
    body.classList.remove("hidden")
    searchForm.classList.remove("search-form--visible")
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
        delay: 5000
    }
});