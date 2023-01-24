let mainPhoto = document.querySelector('.active-photo')
let previews = document.querySelectorAll('.preview-list a')

// Добавлять класс active - item

for (let activePhoto of previews) {
  activePhoto.onclick = function (evt) {
    evt.preventDefault()
    mainPhoto.src = activePhoto.href

    let currentActive = document.querySelector('.preview-list .active-item')
    currentActive.classList.remove('active-item')
    activePhoto.classList.add('active-item')
  }
}
