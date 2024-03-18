const data = "./json/lang-content.json";
var buttons = $('#lang');

function getCookieValue(name) {
    const regex = new RegExp(`(^| )${name}=([^;]+)`)
    const match = document.cookie.match(regex)
    if (match) {
        return match[2]
    }
};


if (getCookieValue("lang") == 'en') {
}


$('#lang-en').click(function () {
    $('#lang-de').removeClass('lang-active');
    $('#lang-en').addClass('lang-active');
    document.cookie = "lang=en"

});

$('#lang-de').click(function () {
    $('#lang-en').removeClass('lang-active');
    $('#lang-de').addClass('lang-active');
    document.cookie = "lang=de"
});