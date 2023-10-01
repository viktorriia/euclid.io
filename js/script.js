// burger
const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__nav');
const navItems = nav.querySelectorAll('a');
const body = document.body;
const header = document.querySelector('.header');
const navLink1 = document.querySelector('.nav__link-1');

burger.addEventListener('click', function() {
  body.classList.toggle('stop-scroll');
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--visible');
});

navItems.forEach(function(el) {
  el.addEventListener('click', function() {
    body.classList.remove('stop-scroll');
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--visible');
  });
});

burger.addEventListener("click", function() {
  navLink1.focus();
});

// swiper

const container = document.querySelector('.slider__container');
const swiper = new Swiper('.slider__swiper', {
  speed: 600,
  pagination: {
    el: '.slider__pagination',
    type: 'bullets',
    clickable: true
  }
});


// tabs

const tabsBtn = document.querySelectorAll('.tabs__item-btn');
const tabsBlock = document.querySelectorAll('.tabs__block');

tabsBtn.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn) {btn.classList.remove('tabs__item-btn--active')});
    e.currentTarget.classList.add('tabs__item-btn--active');

    tabsBlock.forEach(function(element) {element.classList.remove('tabs__block--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs__block--active');
  });
});


// accordion

const accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(element) {
  element.addEventListener('click', function(e) {
    const self = e.currentTarget;
    const control = self.querySelector('.accordion__control');
    const content = self.querySelector('.accordion__content');

    self.classList.toggle('active');

    if (self.classList.contains('active')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
      content.style.maxHeight = null;
    }
  });
});

// search

const searchBtn = document.querySelector('.header__search');
const searchForm = document.querySelector('.search__form');
const searchClose = document.querySelector('.search__form-btn2');

searchBtn.addEventListener('click', function() {
  searchForm.classList.add('search__form--active');

  if (searchForm.classList.contains('search__form--active')) {
    searchBtn.setAttribute('aria-expanded', true);
    searchForm.classList.remove('visibility-hidden');
  } else {
    searchBtn.setAttribute('aria-expanded', false);
    searchForm.classList.add('visibility-hidden');
  }
});

searchClose.addEventListener('click', function() {
  searchForm.classList.remove('search__form--active');
});
