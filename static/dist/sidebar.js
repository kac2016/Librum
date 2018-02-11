const sidebarContainer = document.querySelector('.sidebar')

sidebarContainer.addEventListener('click', e => {

  const booksToggle = document.getElementById('books_toggle');
  const statsToggle = document.getElementById('stats_toggle');

  const books = document.getElementById('books_sidebar');
  const stats = document.getElementById('stats_sidebar');

  booksToggle.addEventListener('click', e => {
    books.style.display = "block";
    stats.style.display = "none";
  });

  statsToggle.addEventListener('click', e => {
    books.style.display = "none";
    stats.style.display = "block";
  });

})
