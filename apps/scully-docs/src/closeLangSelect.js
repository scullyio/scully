document.addEventListener('click', (e) => {
  const checkbox = document.getElementById('lang-select-checkbox');
  const label = document.getElementById('lang-select-label');
  const span = document.getElementById('lang-select-text');
  if (e.target !== checkbox && e.target !== label && e.target !== span && window.location.pathname !== '/')
    checkbox.checked = false;
});
