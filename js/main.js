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
        menu: true,
        // navigationTooltips: ['home', 'projects', 'about me'],
        showActiveTooltip: false
    });
    //methods
    $.fn.fullpage.setAllowScrolling(true);

    setPageButton()

    
});
// ---------------------------------------------------------------------

$(".button-next").on("click", function (e) {
    e.preventDefault();
    const href = $(this).attr("href");
    anime({
        targets: 'html body',
    })
    $("html, body").animate({ scrollTop: $(href).offset() }, 0);
});
// ---------------------------------------------------------------------
// unused
function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight'
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
}

function setPageButton() {
    var active = fullpage_api.getActiveSection();
    console.log(active.anchor)
    if (active.anchor == 'home'){
        anime({ //move "projects" on screen
            targets: '#button-page-projects',
            translateY: 0,
            easing: 'spring(1, 80, 10, 0)',
            duration: 1000
        });
        anime({ //move "about me" offscreen
            targets: '#button-page-aboutme',
            translateY: 100,
            duration: 1000
        });
        anime({ //move "home" offscreen
            targets: '#button-page-home',
            translateY: 100,
            duration: 1000
        });
        
    } else if (active.anchor == 'projects') {
        anime({ //move "projects" offscreen
            targets: '#button-page-projects',
            translateY: 100,
            duration: 1000
        });
        anime({ //move "about me" on screen
            targets: '#button-page-aboutme',
            translateY: 0,
            easing: 'spring(1, 80, 10, 0)',
            duration: 1000
        });
        anime({ //move "home" offscreen
            targets: '#button-page-home',
            translateY: 100,
            duration: 1000
        });
        
    } else if (active.anchor == 'about') {
        anime({ //move "projects" offscreen
            targets: '#button-page-projects',
            translateY: 100,
            duration: 1000
        });
        anime({ //move "about me" offscreen
            targets: '#button-page-aboutme',
            translateY: 100,
            duration: 1000
        });
        anime({ //move "home" on screen
            targets: '#button-page-home',
            translateY: 0,
            easing: 'spring(1, 80, 10, 0)',
            duration: 1000
        });
        
    }
}

function buttonProjects() {
    console.log("active: #home")
}
function buttonAboutMe() {
    console.log("active: #projects")
}
function buttonHome() {
    console.log("active: #aboutme")
}