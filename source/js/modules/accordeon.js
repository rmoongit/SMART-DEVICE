import { list } from 'postcss';

const accordionItem = '[data-accordion-item]';
const accordionItemWrapper = '[data-accordion-item-wrapper]';
const accordionItemContent = '[data-accordion-item-content]';
const classActive = 'footer__title--active';

const titleElements = document.querySelectorAll(accordionItem);

const handleClickItem = (e) => {
  const item = e.currentTarget;
  const wrapper = item.closest(accordionItemWrapper);
  const content = wrapper.querySelector(accordionItemContent);
  const isOpened = item.classList.contains(classActive);
  const allItems = document.querySelectorAll(accordionItem);
  const allContents = document.querySelectorAll(accordionItemContent);

  if (window.innerWidth < 767) {
    allItems.forEach((elem) => {
      elem.classList.remove('footer__title--active');
    });
    allContents.forEach((elem) => {
      elem.style.maxHeight = '0px';
    });

    if (!isOpened) {
      item.classList.add('footer__title--active');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  }
};

const initAccordeon = function () {

  titleElements.forEach((elem) => {
    elem.addEventListener('click', handleClickItem);

    elem.addEventListener('keydown', (e) => {

      if (e.keyCode === 32) {
        handleClickItem(e);
      }
    });
  });
};

const resize = () => {
  const lists = document.querySelectorAll(accordionItemContent);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      lists.forEach((item) => {
        item.style.maxHeight = '100%';
      });
    }
  });

};

export { initAccordeon, resize };


