document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const desktopOverlay = document.getElementsByClassName('desktop_overlay');

  menuButton.addEventListener('toggle', () => {
    desktopOverlay.style.display = 'block';
  });

});
