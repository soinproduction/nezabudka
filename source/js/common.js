
  $('.about-slider').slick({
    accessibility: true,
    arrows: true,
    dots: false,
    slidesToShow:1,
    fade: true,
    cssEase: 'linear',
    speed: 1500,
    dotsClass: "delivery-slider__dots",
    prevArrow: '<button class="about-slider-left about-slider__button"><img src="img/arrow-left-hover.svg" alt="Слайд"></button>',
    nextArrow: '<button class="about-slider-right about-slider__button"><img src="img/arrow-right-hover.svg" alt="Слайд"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.second-slider').slick({
    accessibility: true,
    arrows: true,
    dots: false,
    slidesToShow:1,
    speed: 1500,
    dotsClass: "delivery-slider__dots",
    prevArrow: '<button class="second-slider-left second-slider__button"><img src="img/arrow-left-hover.svg" alt="Слайд"></button>',
    nextArrow: '<button class="second-slider-right second-slider__button"><img src="img/arrow-right-hover.svg" alt="Слайд"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: true,
          dots: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });


  $('.blog-slider').slick({
    accessibility: true,
    arrows: true,
    dots: false,
    slidesToShow:3,
    speed: 1500,
    dotsClass: "delivery-slider__dots",
    prevArrow: '<button class="about-slider-left about-slider__button"><img src="img/arrow-left-hover.svg" alt="Слайд"></button>',
    nextArrow: '<button class="about-slider-right about-slider__button"><img src="img/arrow-right-hover.svg" alt="Слайд"></button>',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          variableWidth: true,
          dots: false,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: false,
          variableWidth: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode:false,
          variableWidth: true,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerMode:false,
          variableWidth: true,
        }
      }
    ]
  });

  var $status1 = $('.mobile-count2');
  var $slickElement1 = $('.second-slider');

  $slickElement1.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status1.text(i + '/' + slick.slideCount);
  });

  var $status = $('.count');
  var $slickElement = $('.about-slider');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
  });

  $('.product-item__favorite').click(function () {
    $(this).toggleClass('product-item__favorite-active')
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("accordion__active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  };

  $(".hamburger").click(function(event) {
    $(".hamburger").toggleClass('hamburger__active'),
    $(".mobile__menu ").toggleClass('mobile__menu__active');
  });

  // переменная не переназначается, поэтому используем const
  // используем querySelectorAll, чтобы собрать массив со всеми сущностями .select
  const select = document.querySelectorAll('.select');

  // если массив не пустой, пробегаемся в цикле по каждой найденой сущности
  if (select.length) {
    select.forEach(item => {
      // достаем из текущей сущности .select__current
      const selectCurrent = item.querySelector('.select__current');

      item.addEventListener('click', event => {
        const el = event.target.dataset.choice;
        const text = event.target.innerText;

        // Проверяем является ли это choosen и не выбрано ли его значение уже
        if (el === 'choosen' && selectCurrent.innerText !== text) {
          selectCurrent.innerText = text;
        }

        item.classList.toggle('is-active');
      });
    });
  }

