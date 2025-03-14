import '../scss/style.scss'

console.log('Works!')

const sidebar = document.querySelector('.sidebar')
const openButton = document.querySelector('.header__menu')
const closeButton = document.querySelector('.header__close')
const mainElBlur = document.querySelector('.main')
const headElBlur = document.querySelector('.header')
let swiper

openButton.addEventListener('click', () => {
  sidebar.classList.add('sidebar--open')
  mainElBlur.style.setProperty('filter', 'blur(2px)')
  headElBlur.style.setProperty('filter', 'blur(2px)')
})

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('sidebar--open')
  mainElBlur.style.setProperty('filter', 'blur(0)')
  headElBlur.style.setProperty('filter', 'blur(0)')
})

const initSwiper = () => {
  if (window.innerWidth < 768 && !swiper) {
    swiper = new Swiper('.swiper', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      },
      navigation: {
        nextEl: '.swiper-button-next'
      },
      slidesPerView: 'auto',
      spaceBetween: 15
    })
  } else if (window.innerWidth >= 768 && swiper) {
    swiper.destroy(true, true)
    swiper = undefined
  }
}

window.addEventListener('load', initSwiper)
window.addEventListener('resize', initSwiper)

if (window.innerWidth >= 1120) {
  const hiddenSlide = document.querySelectorAll('.hidden__slide')
  hiddenSlide.forEach((value) => {
    value.classList.add('swiper-slide')
  })
}

const btnShowMore = document.querySelector('.show-more__button')
const arrowShowMore = document.querySelector('.show-more__arrow')
const sliderContainer = document.querySelector('.slider')
const stateShowMore = { show: false }

btnShowMore.addEventListener('click', () => {
  if (!stateShowMore.show) {
    sliderContainer.classList.add('show-more__slider')
    arrowShowMore.classList.add('arrow__top')
    btnShowMore.textContent = 'Скрыть'
    stateShowMore.show = true
  } else {
    sliderContainer.classList.remove('show-more__slider')
    arrowShowMore.classList.remove('arrow__top')
    btnShowMore.textContent = 'Показать все'
    stateShowMore.show = false
  }
})
