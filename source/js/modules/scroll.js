const formElement = document.querySelector('[data-form]');
const btnElement = document.querySelectorAll('[data-consult]');

const handleButtonClick = () => {
  formElement.scrollIntoView({block: 'center', behavior: 'smooth'});
};

const initScroll = () => {
  btnElement.forEach((btn) => {
    btn.addEventListener('click', handleButtonClick);
  });
};

export {initScroll};
