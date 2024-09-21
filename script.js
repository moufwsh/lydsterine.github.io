// script.js
const toggleButton = document.getElementById('theme-toggle');

// Check the saved theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

// Toggle dark/light mode
toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Save the user's preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
