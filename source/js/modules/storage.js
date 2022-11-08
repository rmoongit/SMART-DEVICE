import {initMask} from './mask';

const initForm = (formElement) => {
  const fieldElements = formElement.querySelectorAll('[data-form]');

  fieldElements.forEach((fieldElement) => {
    const {type, id} = fieldElement;
    const fieldIdentify = `field-${id}`;

    fieldElement.addEventListener('change', () => {
      localStorage.setItem(fieldIdentify, fieldElement.value);
    });

    if (type === 'password') {
      return;
    }

    if (type === 'tel') {
      initMask();
    }

    try {
      const value = localStorage.getItem(fieldIdentify);

      if (value !== null) {
        fieldElement.value = value;
      }

    } catch (error) {
      return;
    }
  });
};

export {initForm};
