'use strict';

(function () {

  // menu

  const header = document.querySelector('.page-header');
  const navToggle = document.querySelector('.page-header__menu-button');
  const body = document.querySelector('.page__body');

  header.classList.remove('page-header--nojs');

  navToggle.addEventListener('click', function () {
    if (header.classList.contains('page-header--close-menu')) {
      header.classList.remove('page-header--close-menu');
      header.classList.add('page-header--open-menu');
      body.classList.add('page__body--no-scroll');
    } else {
      header.classList.add('page-header--close-menu');
      header.classList.remove('page-header--open-menu');
      body.classList.remove('page__body--no-scroll');
    }
  });

  window.addEventListener('click', function (evt) {
    if (evt.target !== header) {
      header.classList.add('page-header--close-menu');
      header.classList.remove('page-header--open-menu');
      body.classList.remove('page__body--no-scroll');
    }
  });

  header.addEventListener('click', function (evt) {
    evt.stopPropagation();
  });

  let scrollPrev = 0;

  window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;

    if ( scrolled > 100 && scrolled > scrollPrev ) {
      header.classList.add('out');
    } else {
      header.classList.remove('out');
    }
    scrollPrev = scrolled;
  });

})();

(function () {

  // img-toggle

  const showImages = document.querySelectorAll('.show-image');
  const images = document.querySelectorAll('.product-card__images img');

  showImages.forEach(function(el, index) {
    el.addEventListener('click', function(evt) {
      evt.preventDefault();

      for (let i = 0; i < images.length; i++ ) {
        images[i].classList.remove('active');
        showImages[i].classList.remove('active');
      }

      images[index].classList.add('active');
      showImages[index].classList.add('active');
    });
  });

})();

(function () {

  // count-toggle

  const plus = document.querySelector('.plus-btn');
  const minus = document.querySelector('.minus-btn');
  const count = document.querySelector('#count');

  plus.addEventListener('click', function() {
    count.value = Number(count.value) + 1;
  });

  minus.addEventListener('click', function() {
    if (count.value > 1) {
      count.value = Number(count.value) - 1;
    }
  });

})();

(function () {

  // popup

  const linkPopup = document.querySelector('.link-popup');
  const popup = document.querySelector('.popup');
  const body = document.querySelector('.page__body');
  const product = document.querySelector('.product-card__title').textContent;
  const count = document.querySelector('#count');
  const favorites = document.querySelector('.link-favorites');

  if (popup) {
    const popupIn = popup.querySelector('.popup__wrapper');
    const closeButton = popup.querySelector('.popup__close-btn');
    const message = popup.querySelector('.popup__message');

    function openPopup (where, e) {
      e.preventDefault();
      e.stopPropagation();
      popup.classList.add('popup--open');
      body.classList.add('page__body--no-scroll');

      message.textContent = 'Товар "' + product + '" в количестве ' + count.value + ' единиц добавлен в ' + where;
    }

    linkPopup.addEventListener('click', function (evt) {
      const basket = 'корзину';

      openPopup(basket, evt);
    });

    favorites.addEventListener('click', function (evt) {
      const select = 'избранное';

      openPopup(select, evt);
    });

    closeButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      popup.classList.remove('popup--open');
      body.classList.remove('page__body--no-scroll');
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        if (popup.classList.contains('popup--open')) {
          evt.preventDefault();
          popup.classList.remove('popup--open');
          body.classList.remove('page__body--no-scroll');
        }
      }
    });

    popup.addEventListener('click', function (evt) {
      if (evt.target !== popupIn) {
        popup.classList.remove('popup--open');
        body.classList.remove('page__body--no-scroll');
      }
    });

    popupIn.addEventListener('click', function (evt) {
      evt.stopPropagation();
    });
  }

})();

(function () {

  // email-valid

  const formFooter = document.querySelector('.page-footer__subscription-form');
  const emailFooter = formFooter.querySelector('#email-footer');

  function validateEmail (email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function initiate () {
    emailFooter.addEventListener("input", validation);
    validation();
  }

  function validation () {
    if (!(validateEmail(emailFooter.value))) {
      emailFooter.setCustomValidity('введите корректный адрес');
    } else {
      emailFooter.setCustomValidity('');
    }
  }

  window.addEventListener('load', initiate);

})();
