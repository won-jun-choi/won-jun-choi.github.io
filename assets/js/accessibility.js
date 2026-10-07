// Keep the template's color-theme control usable from the keyboard.
const themeControl = document.querySelector('#theme-toggle a');
if (themeControl) {
  themeControl.addEventListener('click', (event) => event.preventDefault());
  themeControl.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
      event.preventDefault();
      themeControl.click();
    }
  });
}
