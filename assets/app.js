document.querySelectorAll('.time-row input[type="time"]').forEach((input, i) => {
  const key = `${location.pathname}:time:${i}`;
  const saved = localStorage.getItem(key);
  if (saved) input.value = saved;
  input.addEventListener('change', () => localStorage.setItem(key, input.value));
});