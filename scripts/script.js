
$(function () {
  // TOGGLE NAV 
  $('#burger').click(function() {
    $(this).toggleClass('active');
    $('.header-nav').toggleClass('show');
  });

  // CLOSE AFTER CLICKING NAV LINK
  $('.header-nav ul li a').click(function () {
    $('.header-nav').toggleClass('show');
  });


  // // CLOSE AFTER CLICKING OUTSIDE THE NAV (test play around)

  $("#burger").click(function () {
    $(this).find(".header-nav").toggleClass(".show");
  });
});
$(document).on("click", function (event) {
  const $menu = $(".header-nav");
  if ($menu !== event.target && !$menu.has(event.target).length) {
    $(".header-nav").toggleClass(".show");
  }      


  // // CLOSE AFTER CLICKING OUTSIDE THE NAV
  // const $menu = $('.header-nav');

  // $(document).mouseup(function (e) {
  //   if (!$menu.is(e.target) // if the target of the click isn't the container...
  //     && $menu.has(e.target).length === 0 || $('.header-nav') === $('.show')) // ... nor a descendant of the container
  //   {
  //     $menu.removeClass('show');
  //   }
  // });


  // ------
  // $('.show').click(() => {
  //   $('.header-nav').toggleClass('show');
  // });


  // $('#burger').on('click', () => {
  //   $($menu).toggleClass('active');

  //   $menu.toggleClass('show');

  // });


  // TRYING GSAP
  // TweenMax.to('.ship', 30, {
  //   x: function(index, target) {
  //     console.log(index, target);
  //     return (index + 40) * 50; // 100, 200, 300
  //   }
  // });

  // close hamburger menu after click 
  // $('.header-nav li a').on("click", function () {
  //   $('.header-nav').click();
  // });

// close hamburger menu after click 
  // $('.header-nav li a').on('click', function() {
  //   $('.header-nav').addClass('open');
  // });

  // $('.menu a').on("click", function () {
  //   $('.header-nav').removeClass('open');
  // });



  // DESIGNED BY https://codepen.io/bob6664569/pen/rOzmve
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 3000,
        // value: 800,
        density: {
          enable: true,
          value_area: 789.1476416322727
        }
      },
      color: {
        value: '#ffffff'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#000000'
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.48927153781200905,
        random: false,
        anim: {
          enable: true,
          // speed: 0.2,
          speed: 1,
          opacity_min: 0,
          sync: false
        }
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: true,
          // speed: 2,
          speed: 8,
          size_min: 0,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        // speed: 0.2,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'bubble'
          // mode: 'grab'
        },
        onclick: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        grab: {
          // distance: 400,
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 83.91608391608392,
          size: 1,
          // size: 2,
          duration: 3,
          opacity: 1,
          speed: 3
        },
        repulse: {
          // distance: 200,
          distance: 200,
          // duration: 0.4
          duration: 1
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });
});

