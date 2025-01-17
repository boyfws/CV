document.addEventListener("DOMContentLoaded", () => {
    var savedLanguage, savedTheme

    var themeSwitch = document.getElementById("themeSwitch");
    var languageSwitch = document.getElementById("languageSwitch");

    savedTheme = localStorage.getItem("theme");

    savedLanguage = localStorage.getItem("lang");


    if (savedLanguage === null){
        var userLanguage = navigator.language || navigator.userLanguage;

        var [language] = userLanguage.split('-');

        savedLanguage = language === "ru" ? "ru" : "en";
    }

    if (savedTheme === null){
        var isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

        savedTheme = isDarkMode ? "dark" : "light";
    }

    
    if (savedLanguage === "en") {
        languageSwitch.checked = true;
        switch_to_en()
    } else {
        languageSwitch.checked = false;
        switch_to_ru()
    }


    if (savedTheme === "dark") {
        themeSwitch.checked = true;
        switch_to_dark()
    } else {
        themeSwitch.checked = false;
        switch_to_light()
    }
});






