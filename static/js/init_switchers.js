document.addEventListener("DOMContentLoaded", () => {
    var themeSwitch = document.getElementById("themeSwitch");
    var languageSwitch = document.getElementById("languageSwitch");

    var savedTheme = localStorage.getItem("theme");
    var savedLanguage = localStorage.getItem("lang");


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






