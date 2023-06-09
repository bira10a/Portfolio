
  document.addEventListener('DOMContentLoaded', () => {
    const heightSectionHeader = window.getComputedStyle(document.querySelector('.header')).height.replace(/\D/ig, ''),
          section = document.querySelectorAll('.section');  
    section.forEach(i => i.style.paddingTop = `${heightSectionHeader}px`);


    const burger = () => {
      const burger = document.querySelector('.burger'),
            menu = document.querySelector('.header-nav__list'),
            headerLink = document.querySelectorAll('.header-nav__link');

      burger.addEventListener('click', () => {
        burger.classList.toggle('burger--active');
        menu.classList.toggle('header-nav__list--active');
      });

      headerLink.forEach(i => {
        i.addEventListener('click', () => {
          burger.classList.remove('burger--active');
          menu.classList.remove('header-nav__list--active');
        });
      });
      
      menu.addEventListener('click', (e) => {
        if (e.target === menu && menu.classList.contains('header-nav__list--active')) {
          burger.classList.remove('burger--active');
          menu.classList.remove('header-nav__list--active');
        }
      });

    };
    burger();


    const sliderText = (time) => {
      const slideWrapper = document.querySelector('.main-page__subtitle'),
            slideinner = document.querySelector('.main-page__subtitle-list'),
            slide = document.querySelectorAll('.main-page__subtitle-list div'),
            height = window.getComputedStyle(document.querySelector('.main-page__subtitle-list div')).height;
  
      slideWrapper.style.height = height;
      slideinner.style.height = 100 * slide.length + '%';
  
      let offset = 0;
 
      const startSlide = () => {
        if (offset == +height.slice(0, height.length - 2) * (slide.length - 1)) {
          offset = 0;
        } else {
          offset += +height.slice(0, height.length - 2);
        }

        slideinner.style.transform = `translateY(-${offset}px)`;
      };

      setInterval(() => {
        startSlide();
      }, time);
    };
    sliderText(2000);


    const sliderPage = () => {
      const wrapper = document.querySelector('.wrapper'),
            inner = document.querySelector('.inner'),
            section = document.querySelectorAll('.section'),
            headerLink = document.querySelectorAll('.header-nav__item a');
      let offset = 0;
      let index = 1;

      wrapper.style.cssText = `
        overflow: hidden;
        width: 100vw;
      `;
      let width = window.getComputedStyle(wrapper).width.replace(/\D/ig, '');
      inner.style.width = 100 * section.length + '%';
      inner.style.display = 'flex';
      inner.style.transition = 'all 0.6s ease-in-out';
      section.forEach(i => i.style.width = width + 'px');

      const headerActiveLink = (n) => {
        headerLink.forEach(i => {
          i.classList.remove('header-nav__link--active');
        });
        headerLink[n].classList.add('header-nav__link--active');
      };

      section.forEach(i => i.style.opacity = 0);
      section[index - 1].style.opacity = 1;

      window.addEventListener('resize', () => {
        width = window.getComputedStyle(wrapper).width.replace(/\D/ig, '');
        section.forEach(i => i.style.width = width + 'px');
      });

      window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
          if (offset == width * (section.length - 1)) {
            offset = 0;
            index = 1;
          } else {
            offset += +width;
            index += 1;
          }
        } else {
          if (offset == 0) {
            offset = width * (section.length - 1);
            index = section.length;
          } else {
            offset -= +width;
            index -= 1;
          }
        }


        headerActiveLink(index - 1);

        section.forEach(i => i.style.opacity = 0);
        section[index - 1].style.opacity = 1;
        
        inner.style.transform = `translateX(-${offset}px)`;
      });

      // document.addEventListener('click', () => {
      //   if (offset == width * (section.length - 1)) {
      //     offset = 0;
      //     index = 1;
      //   } else {
      //     offset += +width;
      //     index += 1;
      //   }

      //   headerActiveLink(index - 1);

      //   section.forEach(i => i.style.opacity = 0);
      //   section[index - 1].style.opacity = 1;
        
      //   inner.style.transform = `translateX(-${offset}px)`;
      // });

      document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowRight') {
          if (offset == width * (section.length - 1)) {
            offset = 0;
            index = 1;
          } else {
            offset += +width;
            index += 1;
          }

          headerActiveLink(index - 1);

          section.forEach(i => i.style.opacity = 0);
          section[index - 1].style.opacity = 1;

          inner.style.transform = `translateX(-${offset}px)`;
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.code === 'ArrowLeft') {
          if (offset == 0) {
            offset = width * (section.length - 1);
            index = section.length;
          } else {
            offset -= +width;
            index -= 1;
          }

          headerActiveLink(index - 1);

          section.forEach(i => i.style.opacity = 0);
          section[index - 1].style.opacity = 1;

          inner.style.transform = `translateX(-${offset}px)`;
        }
      });

      headerLink.forEach((link, num) => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          index = num + 1;
          offset = width * num;
          inner.style.transform = `translateX(-${offset}px)`;
          headerActiveLink(num);
          section.forEach(i => i.style.opacity = 0);
          section[num].style.opacity = 1;
        });
      });
      
      
    };
    sliderPage();
    
  });
  
  











////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const burger = document.querySelector('.burger'),
//       headerMenu = document.querySelector('.header-nav__inner'),
//       headerMenuItem = document.querySelectorAll('.header-nav__item'),
//       btnCloseMemu = document.querySelector('.header-nav__btn'),
//       btnCloseMemuLineOne = document.querySelector('.header-nav__btn-one'),
//       btnCloseMemuLineTwo = document.querySelector('.header-nav__btn-two'),
//       body = document.querySelector('body'),
//       content = document.querySelector('.content');


// burger.addEventListener('click', () => {
//   headerMenu.classList.add('header-nav__inner--active');

//   body.classList.add('body-lock');
//   content.classList.add('lock');

//   // setTimeout(() => {
//   //   btnCloseMemuLineOne.style.animation = 'btnLineOn 1s linear forwards';
//   // }, 1000);

//   // setTimeout(() => {
//   //   btnCloseMemuLineTwo.style.animation = 'btnLineOn 1s linear forwards';
//   // }, 2000);
// });

// btnCloseMemu.addEventListener('click', () => {
//   // btnCloseMemuLineOne.style.animation = 'btnLineOff 1s linear forwards';
//   // btnCloseMemuLineTwo.style.animation = 'btnLineOff 1s linear forwards';

//   headerMenu.classList.remove('header-nav__inner--active');
//   content.classList.remove('lock');

//   body.classList.remove('body-lock');
  
//   headerMenuItem.forEach(i => {
//     i.style.animation = 'opacity 0.4s linear forwards';
//   })
  
//   setTimeout(() => {
//     headerMenuItem.forEach(i => {
//       i.style.cssText = '';
//     })
//   }, 2000);
// });

// /////////////////////////////////////////
// const headerCheckbox = document.querySelector('.header__input');

// headerCheckbox.addEventListener('change', () => {
//   if (headerCheckbox.checked) {
//     body.classList.add('black-theme');
//   } else {
//     body.classList.remove('black-theme');
//   }

// })


// /////////////////////////////////////////

// const basket = document.querySelector('.basket'),
//       btnOnBasket = document.querySelector('.header-nav__basketBtn');

// btnOnBasket.addEventListener('click', () => {
//   basket.classList.toggle('basket--active');
// });

// // document.addEventListener('scroll', () => {
// //   if (basket.classList.contains('basket--active')) {
// //     console.log(document.documentElement.scrollTop);
// //     basket.style.top = document.documentElement.scrollTop + 'px';
// //   }
// // })


// ///////////////////////////////////////// 
//   const headerActive = () => {
//     const sectionTopPromo = document.querySelector('.top-promo');
//     const heightSection = window.getComputedStyle(sectionTopPromo).height.replace(/\D/ig, '');
//     const sectionHeader = document.querySelector('.header');
    

//     document.addEventListener('scroll', () => {
//       // console.log(heightSection.replace(/D/ig, ''));

//       if (document.documentElement.scrollTop == heightSection || document.documentElement.scrollTop > heightSection) {
//         sectionHeader.classList.add('header--active')
//       } else {
//         sectionHeader.classList.remove('header--active')
//       }
//     });

//   };
//   headerActive();

// /////////////////////////////////////////
// //mobile Slider section Assortment

//   if ('ontouchstart' in window) {
//     const sliderAssortment = () => {
//       const sliderParent = document.querySelector('.assortment__list'),
//             sliders = document.querySelectorAll('.assortment__item');

//       let index = 1;

//       let offset = 0;

//       const prevSliderBtn = document.createElement('button');
//       prevSliderBtn.style.cssText = `
//       display: block; 
//       padding: 20px 60px;
//       margin: 0 auto;
//       background-color: green;
//       color: black;
//       font-size: 24px;
//       `;
//       prevSliderBtn.textContent = 'Назад';
//       sliderParent.after(prevSliderBtn);

//       const nextSliderBtn = document.createElement('button');
//       nextSliderBtn.style.cssText = `
//       display: block; 
//       padding: 20px 60px;
//       margin: 0 auto;
//       background-color: green;
//       color: black;
//       font-size: 24px;
//       `;
//       nextSliderBtn.textContent = 'Вперёд';
//       sliderParent.after(nextSliderBtn);

//       sliderParent.style.cssText = `
//         justify-content: center;
//         width: auto;  
//       `;

//       const wrapper = document.createElement('div');
//       sliderParent.before(wrapper);
//       wrapper.append(sliderParent);

//       const width = window.getComputedStyle(wrapper).width;

//       wrapper.style.cssText = `
//         overflow: hidden;
//         margin: 0 auto;
//       `;

//       sliders.forEach(i => i.style.width = width);

//       sliderParent.style.width = 100 * sliders.length + '%'
//       sliderParent.style.transition = 'all 0.4s linear';

//       nextSliderBtn.addEventListener('click', () => {
//         if (offset == +width.replace(/\D/ig, '') * (sliders.length - 1)) {
//           offset = 0;
//         } else {
//           offset += +width.replace(/\D/ig, '');
//         }
        
//         sliderParent.style.transform = `translateX(-${offset}px)`
//       });

//       prevSliderBtn.addEventListener('click', () => {
//         if (offset == 0) {
//           offset = +width.replace(/\D/ig, '') * (sliders.length - 1)
//         } else {
//           offset -= +width.replace(/\D/ig, '');
//         }
        
//         sliderParent.style.transform = `translateX(-${offset}px)`
//       });


//       setInterval(() => {
//         if (offset == +width.replace(/\D/ig, '') * (sliders.length - 1)) {
//           offset = 0;
//         } else {
//           offset += +width.replace(/\D/ig, '');
//         }

//         sliderParent.style.transform = `translateX(-${offset}px)`
//       }, 4000);
      

//       let posX1 = 0,
//           posX2 = 0,
//           posInit = 0,
//           posFinal = 0;

//       getEvent = (e) => e.type.search('touch') !== -1 ? e.touches[0] : e,

//       function start() {
//         sliderParent.addEventListener('touchstart', (e) => {
//           posX1 = e.clientX;
//           console.log(posX1);
//         });
//       };

//       start();
      
//     };

//     sliderAssortment();
//   }

// ///////////////////////////////////////// GSAP

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// if (ScrollTrigger.isTouch !== 1) {

//   ScrollSmoother.create({
//     wrapper: '.wrapper',
//     content: '.content',
//     smooth: 1.5,
//     effects: true
//   })

//   gsap.fromTo('.top-promo', { opacity: 1 }, {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.top-promo',
//       start: 'center',
//       end: '650',
//       scrub: true
//     }
//   })

//   let itemsL = gsap.utils.toArray('.gallery__left')

//   itemsL.forEach(item => {
//     gsap.fromTo(item, { opacity: 0, x: -100 }, {
//       opacity: 1, x: 0,
//       scrollTrigger: {
//         trigger: item,
//         start: '-650',
//         end: '-100',
//         scrub: true
//       }
//     })
//   })
  
//   // itemsL.forEach(item => {
//   //   gsap.fromTo(item, { opacity: 1, x:  0}, {
//   //     opacity: 0, x: -100,
//   //     scrollTrigger: {
//   //       trigger: item,
//   //       start: 'top',
//   //       end: '400',
//   //       scrub: true
//   //     }
//   //   })
//   // })

//   let itemsR = gsap.utils.toArray('.gallery__right')

//   itemsR.forEach(item => {
//     gsap.fromTo(item, { opacity: 0, x: 50 }, {
//       opacity: 1, x: 0,
//       scrollTrigger: {
//         trigger: item,
//         start: '-550',
//         end: 'top',
//         scrub: true
//       }
//     })
//   })



//   gsap.fromTo('.assortment__list', { x: -40 }, {
//     x: -400,
//     scrollTrigger: {
//       trigger: '.assortment__list',
//       start: '-850',
//       end: 'bottom',
//       scrub: true
//     }
//   })

//   gsap.fromTo('.assortment__list', { opacity: 1 }, {
//     opacity: 0,
//     scrollTrigger: {
//       trigger: '.assortment__list',
//       start: '-200',
//       end: '200',
//       scrub: true
//     }
//   })


// }