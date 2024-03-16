const sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };
// ---------------------------------------------------------------------

// on page load:
$(document).ready(function () {
    anime.timeline().add({
        targets: '.loader',
        translateY: -1000,
        duration: 500,
        delay: 500,
        easing: 'easeInExpo'
        
    }).add({
        targets: '.loader',
        duration: 0,
        delay: 0,
        complete: function () {
            $('.loader').hide()
        }
    });

});

// fullpage.js initialization
$(document).ready(function() {
    $('#fullpage').fullpage({
        //options here
        licenseKey: 'gplv3-license',
        autoScrolling:true,
        scrollHorizontally: true,
        anchors: ['home', 'projects', 'about'],
        navigation: true,
        navigationPosition: 'right',
        // navigationTooltips: ['home', 'projects', 'about me'],
        showActiveTooltip: false
    });

    //methods
    $.fn.fullpage.setAllowScrolling(true);
});
// ---------------------------------------------------------------------

var windowheight = $(window).height();
console.log(windowheight);

$(".button-next").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    anime({
        targets: 'html body',
    })
    $("html, body").animate({ scrollTop: $(href).offset().top }, 0);
});
// ---------------------------------------------------------------------
function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}

//scrolling functionality
// let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

// window.addEventListener('scroll', function handleScroll() {
//     const scrollTopPosition =
//       window.scrollY || document.documentElement.scrollTop;

//     // check scrolling direction
//         //if scrolling down:
//     if (scrollTopPosition > lastScrollTop) {
//       console.log('scrolling down');

//     anime.timeline().add({
//         targets: 'html',
//         duration: 0,
//         complete: function () {
//             $('html').css('overflow', 'hidden');
//         }
//      }).add({
//         targets: 'main',
//         duration: 2000,
//         translateY: "100vh",
//         easing: "easeInOutCubic",
//         complete: function () {
//             $('html').css('overflow', 'initial');
//         }
//     });

//         //if scrolling up:
//     } else if (scrollTopPosition < lastScrollTop) {
//       console.log('scrolling up');

//       anime.timeline().add({
//         targets: 'html',
//         duration: 0,
//         complete: function () {
//             $('html').css('overflow', 'hidden');
//         }
//      }).add({
//         targets: 'main',
//         duration: 2000,
//         translateY: '100vh',
//         easing: "easeInOutCubic",
//         complete: function () {
//             $('html').css('overflow', 'initial');
//         }
//     });
//     }
//     lastScrollTop =
//       scrollTopPosition <= 0 ? 0 : scrollTopPosition;
//   },
//   false,
// );