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

const feedbackEl = document.querySelector('.aside__feedback')
const callBtn = document.querySelector('.page-footer__call-button')
const chatBtn = document.querySelector('.page-footer__chat-button')
const feedbackCloseBtn = document.querySelector('.feedback__close')
const blockInpt = document.querySelectorAll('.form__block--chat')
const titleContent = document.querySelector('.title__text')
const sidebarEl = document.querySelector('.sidebar')

callBtn.addEventListener('click', () => {
  feedbackEl.classList.add('aside__feedback--open')
  titleContent.textContent = 'Обратная связь'
  mainElBlur.style.setProperty('filter', 'blur(2px)')
  sidebarEl.style.setProperty('filter', 'blur(2px)')
})

feedbackCloseBtn.addEventListener('click', () => {
  feedbackEl.classList.remove('aside__feedback--open')
  mainElBlur.style.setProperty('filter', 'blur(0)')
  sidebarEl.style.setProperty('filter', 'blur(0)')
  blockInpt.forEach((value) => {
    value.classList.remove('form__block--hidden')
  })
})

chatBtn.addEventListener('click', () => {
  feedbackEl.classList.add('aside__feedback--open')
  titleContent.textContent = 'Заказать звонок'
  mainElBlur.style.setProperty('filter', 'blur(2px)')
  sidebarEl.style.setProperty('filter', 'blur(2px)')
  blockInpt.forEach((value) => {
    value.classList.add('form__block--hidden')
  })
})

const readMoreBtn = document.querySelector('.about-button__read-more')
const mainDescr = document.querySelector('.main__about-description')
const readMoreBtnState = { 'show': false }
const arrowEl = document.querySelector('.about-button__arrow')

readMoreBtn.addEventListener('click', () => {
  if (!readMoreBtnState.show) {
    mainDescr.classList.add('main__about-description--open')
    readMoreBtn.textContent = 'Скрыть'
    arrowEl.classList.add('about-button__arrow--rotete')
    readMoreBtnState.show = true
  } else if (readMoreBtnState.show) {
    readMoreBtn.textContent = 'Читать далее'
    mainDescr.classList.remove('main__about-description--open')
    arrowEl.classList.remove('about-button__arrow--rotete')
    readMoreBtnState.show = false
  }
})

let newSwiper

const newInitSwiper = () => {
  if (window.innerWidth < 768 && !newSwiper) {
    newSwiper = new Swiper('.swiper__container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination__scroll',
        clickable: true,
        type: 'bullets'
      },
      navigation: {
        nextEl: '.slider__button__next-icon'
      },
      slidesPerView: 'auto',
      // spaceBetween: 15
    })
  } else if (window.innerWidth >= 768 && newSwiper) {
    newSwiper.destroy(true, true)
    newSwiper = undefined
  }
}

window.addEventListener('load', newInitSwiper)
window.addEventListener('resize', newInitSwiper)

const showMoreBtnSwiper = document.querySelector('.show-more__swiper__button')
const swiperContainer = document.querySelector('.swiper__container')
const showMoreArrowSwiper = document.querySelector('.show-more__swiper__arrow')
const swiperContainerState = {show : false}

showMoreBtnSwiper.addEventListener('click', () => {
  if(!swiperContainerState.show) {
    swiperContainer.classList.add('swiper__container--open')
    showMoreBtnSwiper.textContent = 'Скрыть'
    showMoreArrowSwiper.classList.add('arrow__top')
    swiperContainerState.show = true
  } else if (swiperContainerState.show) {
    swiperContainer.classList.remove('swiper__container--open')
    showMoreBtnSwiper.textContent = 'Показать все'
    showMoreArrowSwiper.classList.remove('arrow__top')
    swiperContainerState.show = false
  }
})