import '../scss/style.scss'

console.log('Works!')

const sidebar = document.querySelector('.sidebar')
const openButton = document.querySelector('.header__menu')
const closeButton = document.querySelector('.header__close')
const mainElBlur = document.querySelector('.main')
const headElBlur = document.querySelector('.header')

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
