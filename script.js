document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  const sections = document.querySelectorAll('h2'); // заголовки разделов
  const lectureGrids = document.querySelectorAll('.lectures-grid'); // группы карточек

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    lectureGrids.forEach((grid, index) => {
      let hasMatch = false;
      const cards = grid.querySelectorAll('.lecture-card');

      cards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const desc = card.querySelector('p').textContent.toLowerCase();

        if (title.includes(query) || desc.includes(query)) {
          card.style.display = 'block';
          hasMatch = true;
        } else {
          card.style.display = 'none';
        }
      });

      // Скрываем или показываем раздел
      if (hasMatch) {
        sections[index].style.display = 'block';
        grid.style.display = 'grid';
      } else {
        sections[index].style.display = 'none';
        grid.style.display = 'none';
      }
    });
  });
});
