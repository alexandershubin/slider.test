$('.slider').owlCarousel({
  nav: true,
  margin: 10,
  dots: false,
  autoHeight: true,
  items: 4,
  loop: true,
  autoplay: false,
  center: true,
  URLhashListener: true,
  startPosition: 'URLHash',
  responsive: {
    0: {
      items: 1,
      dots: true,
      nav: false
    },
    768: {
      items: 1,

    },
    1000: {
      items: 1
    }
  }
});

const text = {
  desc: {
    h2: 'Этот текст добавлен для демонстрации на странице',
    p: 'Акция действует с 01.07.18 по 31.07.18',
  },
  mob: {
    h2: 'Этот текст добавлен для демонстрации на странице',
    p: 'Тест на внимательность',
  }
};

$(window).resize(() => {
  if ($(window).width() > 767) {
    $('.slider-text h2').each((i, html) => $(html).html(text.desc.h2));
    $('.slider-text p').each((i, html) => $(html).html(text.desc.p));
  } else {
    $('.slider-text h2').each((i, html) => $(html).html(text.mob.h2));
    $('.slider-text p').each((i, html) => $(html).html(text.mob.p));
  }
});

let slideBlock = document.querySelectorAll('.slide__block');

slideBlock.forEach((item) => {
  item.addEventListener('click', () => {
    hideClassActive();
    item.classList.add('active')
  })
});

const hideClassActive = () => {
  slideBlock.forEach(item => item.classList.remove('active'));
};
