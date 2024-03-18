const data = "./json/lang-content.json";
var buttons = $('#lang');






$('#lang-en').click(function () {
    $('#lang-de').removeClass('lang-active');
    $('#lang-en').addClass('lang-active');

    localStorage.setItem("lang", "en");

});

$('#lang-de').click(function () {
    $('#lang-en').removeClass('lang-active');
    $('#lang-de').addClass('lang-active');
    
    localStorage.setItem("lang", "de");
    window.location.href = "de/index.html"
});