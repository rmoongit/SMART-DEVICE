const buttonElement = document.querySelector('[data-company-button]');
const textElements = document.querySelectorAll('[data-company-text]');
const pElement = document.querySelector('[data-company-hide]');


const showText = () => {
  const lastElem = textElements[textElements.length - 1];

  if (lastElem.dataset.companyText === 'open') {
    lastElem.dataset.companyText = '';
    buttonElement.textContent = 'Свернуть';
  } else {
    lastElem.dataset.companyText = 'open';
    buttonElement.textContent = 'Подробнее';
  }

  if (window.innerWidth < 767) {
    pElement.style.display =
      lastElem.dataset.companyText === 'open' ? 'none' : 'block';
  }
};


const initShowText = () => {
  buttonElement.addEventListener('click', showText);
};

export {initShowText};
