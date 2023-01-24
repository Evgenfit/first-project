let darkButton = document.querySelector('.theme-button-dark')
let lightButton = document.querySelector('.theme-button-light')
let serifButton = document.querySelector('.font-button-serif')
let sansSerifButton = document.querySelector('.font-button-sans-serif')

darkButton.onclick = function () {
  document.body.classList.add('dark')
  darkButton.classList.add('active')
  lightButton.classList.remove('active')
}

lightButton.onclick = function () {
  document.body.classList.remove('dark')
  lightButton.classList.add('active')
  darkButton.classList.remove('active')
}

serifButton.onclick = function () {
  document.body.classList.add('serif')
  serifButton.classList.add('active')
  sansSerifButton.classList.remove('active')
}

sansSerifButton.onclick = function () {
  document.body.classList.remove('serif')
  serifButton.classList.remove('active')
  sansSerifButton.classList.add('active')
}
