document.addEventListener('click', (e) => {
  const checkbox = document.getElementById('lang-select-checkbox');
  const label = document.getElementById('lang-select-label');
  const span = document.getElementById('lang-select-text');
  if (checkbox && label && span && e.target !== checkbox && e.target !== label && e.target !== span) checkbox.checked = false;
});
