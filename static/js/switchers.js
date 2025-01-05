const elements = document.querySelectorAll('.dark-bg');
const resume = document.querySelector('a[data-translate="resume-button"]');




const CreateEffect = () => {
        document.body.classList.remove('loaded');

        void document.body.offsetWidth;

        document.body.classList.add('loaded');
}


const switch_to_dark = () => {
        document.body.classList.add("dark-mode");
        localStorage.setItem("theme", "dark");
        elements.forEach((element) => {
                element.style.backgroundColor = '#0c1c3c';
        });
        // Только, что тестил 0F2557FF, норм тема
        // P.s оставляем то, что есть но если, что потом откатим к этой версии
}

const switch_to_light = () => {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("theme", "light");
        elements.forEach((element) => {
                element.style.backgroundColor = '#102D69';
        });

}
const switch_to_ru = () => {
        document.querySelectorAll('[data-translate]').forEach(element => {
                let key = element.getAttribute('data-translate');
                element.innerHTML = textData["ru"][key];
        });
        document.title = "Минкин Даниэль";
        if (name === "backend") {
                resume.href = "https://www.example.com"
        } else if (name === "ml") {
                resume.href = "https://www.example.com"
        }
        CreateEffect();
        localStorage.setItem("lang", "ru");

}

const switch_to_en = () => {
        document.querySelectorAll('[data-translate]').forEach(element => {
                let key = element.getAttribute('data-translate');
                element.innerHTML = textData["en"][key];
        });
        document.title = "Minkin Daniel"
        if (name === "backend") {
                resume.href = "https://www.example.com"
        } else if (name === "ml") {
                resume.href = "https://www.example.com"
        }
        CreateEffect();
        localStorage.setItem("lang", "en");

}