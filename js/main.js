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

$(document).ready(function () {
    var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    console.log(`ismobile = ${isMobile}`)
    
    if ((isMobile) || document.documentElement.clientWidth < 700) {
        $('#page-next-container').hide()
    }

});
  
// ---------------------------------------------------------------------

$(".button-next").on("click", function () {
    var active = fullpage_api.getActiveSection();

    if (active.anchor == 'home'){
        fullpage_api.moveTo('projects');
        
    } else if (active.anchor == 'projects') {
        fullpage_api.moveTo('about');
        
    } else if (active.anchor == 'about') {
        fullpage_api.moveTo('home');
    }
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

function emailButton() {
    navigator.clipboard.writeText("contact@cakeeh.art");
    $(".email-tooltiptext").text("copied!")
}



//-------------------------------------------------------
// this is the text cycling box

// $(document).ready(function () {
//     const elts = {
//         text1: document.getElementById("skills-text1"),
//         text2: document.getElementById("skills-text2")
//     };
    
    
//     const texts = [
//         "Designs",
//         "3D Environments",
//         "Pixel Art"
//     ];
    
    
//     const morphTime = 1;
//     const cooldownTime = 0.25;
    
//     let textIndex = texts.length - 1;
//     let time = new Date();
//     let morph = 0;
//     let cooldown = cooldownTime;
    
//     elts.text1.textContent = texts[textIndex % texts.length];
//     elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    
//     function doMorph() {
//         morph -= cooldown;
//         cooldown = 0;
//         let fraction = morph / morphTime;
    
//         if (fraction > 1) {
//             cooldown = cooldownTime;
//             fraction = 1;
//         }
    
//         setMorph(fraction);
//     }
    
//     function setMorph(fraction) {
//         elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//         elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
//         fraction = 1 - fraction;
//         elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//         elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    
//         elts.text1.textContent = texts[textIndex % texts.length];
//         elts.text2.textContent = texts[(textIndex + 1) % texts.length];
//     }
    
//     function doCooldown() {
//         morph = 0;
    
//         elts.text2.style.filter = "";
//         elts.text2.style.opacity = "100%";
    
//         elts.text1.style.filter = "";
//         elts.text1.style.opacity = "0%";
    
//     }
    
//     function animate() {
//         requestAnimationFrame(animate);
    
//         let newTime = new Date();
//         let shouldIncrementIndex = cooldown > 0;
//         let dt = (newTime - time) / 1000;
//         time = newTime;
    
//         cooldown -= dt;
    
//         if (cooldown <= 0) {
//             if (shouldIncrementIndex) {
//                 textIndex++;
//             }
//             doMorph();
//         } else {
//             doCooldown();
//         }
//     }
    
//     animate();
    
// });
