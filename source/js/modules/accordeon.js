const listElement = document.querySelectorAll('[data-accordeon]');

const initAccordeon = function () {
  for (let i = 0; i < listElement.length; i++) {
    const element = listElement[i];
    element.addEventListener('click', () => {
      element.classList.toggle('footer__title--active');

      const list = element.nextElementSibling;
      if (list.style.maxHeight) {
        list.style.maxHeight = null;

      } else {
        list.style.maxHeight = list.scrollHeight + 'px';
      }
    });

  }
};

export { initAccordeon };
