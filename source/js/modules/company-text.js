const buttonElement = document.querySelector('[data-company="button"]');
const textElement = document.querySelector('[data-company="text-3"]');


const showText = () => {

  if (!textElement.classList.contains('visually-hidden')) {
    buttonElement.textContent = 'Подробнее';
  } else {
    buttonElement.textContent = 'Свернуть';
  }
  textElement.classList.toggle('visually-hidden');
};

const initShowText = () => {
  buttonElement.addEventListener('click', showText);
};

export { initShowText };
