const phoneElement = document.querySelectorAll('[data-form="phone"]');

const initMask = () => {

  phoneElement.forEach((element) => {
    IMask(element, {
      mask: '+{7} (000) 000 00 00',
      lazy: true, // make placeholder always visible
      placeholderChar: ' ', // defaults to '_'
    });
  });
};

export { initMask };
