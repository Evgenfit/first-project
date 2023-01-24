let gridButton = document.querySelector('.card-view-button-grid')
let listButton = document.querySelector('.card-view-button-list')
let cardsList = document.querySelector('.cards')

listButton.onclick = function () {
  gridButton.classList.remove('active')
  listButton.classList.add('active')
  cardsList.classList.add('list')
}

gridButton.onclick = function () {
  gridButton.classList.add('active')
  listButton.classList.remove('active')
  cardsList.classList.remove('list')
}
