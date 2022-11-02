const titleElement = document.querySelectorAll('[data-accordeon]');
// const ListElement = document.querySelectorAll('[data-accordeon="list"]');

const initAccordeon = function () {
  for (let i = 0; i < titleElement.length; i++) {
    const title = titleElement[i];
    const list = title.nextElementSibling;

    title.addEventListener('click', () => {
      title.classList.toggle('footer__title--active');

      if (list.style.maxHeight) {
        list.style.maxHeight = null;
      } else {
        list.style.maxHeight = list.scrollHeight + 'px';
      }

    });
  }
};

// titleElement.addEventListener('keydown', (e) => {

//   if (e.keyCode === 32) {
//     openList();
//   }
// });

export { initAccordeon };


