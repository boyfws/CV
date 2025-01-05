window.onload = () => {
    var themeSwitch = document.getElementById("themeSwitch");
    var languageSwitch = document.getElementById("languageSwitch");


    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            switch_to_dark()
        } else {
            switch_to_light()
        }
    });


    languageSwitch.addEventListener("change", () => {
        if (languageSwitch.checked) {
            switch_to_en()
        } else {
            switch_to_ru()
        }
    });
    document.body.classList.add('loaded')
}



