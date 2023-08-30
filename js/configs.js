var btnDarkMode = document.querySelector("#btnDarkMode");
var btnLightMode = document.querySelector("#btnLightMode");
var tema = document.querySelector("#theme");

// dark mode
btnDarkMode.addEventListener('click', function toggleTheme() {
    var tema = document.getElementsByTagName('link')[0];

    if (tema.getAttribute('href') == 'css/DarkMode.css') {
        tema.setAttribute('href', 'css/LightMode.css');
    } else {
        theme.setAttribute('href', 'css/DarkMode.css');
    }
});

// light mode
btnLightMode.addEventListener('click', function toggleTheme() {
    var tema = document.getElementsByTagName('link')[0];

    if (tema.getAttribute('href') == 'css/LightMode.css') {
        tema.setAttribute('href', 'css/DarkMode.css');
    } else {
        theme.setAttribute('href', 'css/LightMode.css');
    }
});






