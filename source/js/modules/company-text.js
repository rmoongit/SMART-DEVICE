const buttonElement = document.querySelector('[data-company="button"]');
const textElement = document.querySelector('[data-company="text-4"]');
const paragraphElement = document.querySelector('[data-company="text-3"]');


const showText = () => {

  if (!textElement.classList.contains('company__text--open')) {
    buttonElement.textContent = 'Подробнее';
  } else {
    buttonElement.textContent = 'Свернуть';
  }
  textElement.classList.toggle('company__text--open');
  paragraphElement.classList.toggle('company__paragraph');
};

const initShowText = () => {
  buttonElement.addEventListener('click', showText);
};

export { initShowText };
