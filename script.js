document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search');
  if (!searchInput) return; // если по какой-то причине нет поля — выходим

  const sections = document.querySelectorAll('h2'); // заголовки разделов
  const lectureGrids = document.querySelectorAll('.lectures-grid'); // группы карточек

  function runSearch(query) {
    const q = (query || '').toLowerCase().trim();

    lectureGrids.forEach((grid, index) => {
      let hasMatch = false;
      const cards = grid.querySelectorAll('.lecture-card');

      cards.forEach(card => {
        const title = (card.querySelector('h3')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('p')?.textContent || '').toLowerCase();

        if (!q || title.includes(q) || desc.includes(q)) {
          // пустая строка -> показываем всё (восстановление состояния)
          card.style.display = '';
          hasMatch = true;
        } else {
          card.style.display = 'none';
        }
      });

      // Скрываем или показываем раздел
      if (hasMatch) {
        sections[index].style.display = '';
        grid.style.display = 'grid';
      } else {
        sections[index].style.display = 'none';
        grid.style.display = 'none';
      }
    });
  }

  // начальное состояние — показать все
  runSearch('');

  searchInput.addEventListener('input', (e) => {
    runSearch(e.target.value);
  });
});
