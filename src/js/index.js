import '../scss/style.scss'

console.log('Works!')

const sidebar = document.querySelector('.sidebar')
const openButton = document.querySelector('.header__menu')
const mainElBlur = document.querySelector('.main')
const state = { asideOpen: false }

openButton.addEventListener('click', () => {
  if (!state.asideOpen) {
    sidebar.classList.add('sidebar--open')
    openButton.classList.add('button--close')
    mainElBlur.style.setProperty('filter', 'blur(2px)')
    state.asideOpen = true
  } else {
    mainElBlur.style.setProperty('filter', 'blur(0)')
    sidebar.classList.remove('sidebar--open')
    openButton.classList.remove('button--close')
    state.asideOpen = false
  }
})
