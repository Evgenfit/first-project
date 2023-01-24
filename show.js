let blogArticles = document.querySelectorAll('.blog-article')

for (let blogArticle of blogArticles) {
  let readMoreButton = blogArticle.querySelector('.more')
  readMoreButton.onclick = function () {
    blogArticle.classList.remove('short')
  }
}
