'use strict';
window.addEventListener('DOMContentLoaded', function () {
  const className = document.querySelector('.demo__button');
  const mainBlock = document.querySelector('.main');
  const demoBlock = document.querySelector('.demo');

  const animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
      mainBlock.classList.add('active');
      demoBlock.classList.remove('active');
    }, 5000);
  };

  className.addEventListener('click', animateButton, false);
});
