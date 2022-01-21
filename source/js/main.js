'use strict';

(function () {

  // menu

  var header = document.querySelector('.page-header');
  var navToggle = document.querySelector('.page-header__menu-button');
  var body = document.querySelector('.page__body');

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
  
})();
