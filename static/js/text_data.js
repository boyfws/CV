var job_ru, job_en, action_en, action_ru, about_ru, about_en, goal_1_ru, goal_1_en, goal_2_ru, goal_2_en;


if (name === "backend") {
    job_ru = "backend разработчик";
    job_en = "backend developer";
    action_ru = "<br> Пишу backend на Python и Node.js";
    action_en = "<br> I write backend in Python and Node.js";
    about_ru = "Я разрабатываю микросервисные приложения, используя как REST API, так и gRPC. Предпочитаю использовать PostgreSQL как основную базу данных и Redis для кэширования";
    about_en = "I develop microservice applications using both REST APIs and gRPC. I prefer to use PostgreSQL as my main database and Redis for caching";
    goal_1_ru = "В ближайшее время я планирую попробовать пописать код на Go";
    goal_1_en = "I plan to try writing code in Go in the near future";
    goal_2_ru = "Также я бы хотел поближе поработать с gRPC и использовать его как основной протокол в своем следующем проекте";
    goal_2_en = "I'd also like to work more closely with gRPC and use it as a core protocol in my next project";
} else if (name === "ml") {
    job_ru = "mle специалист";
    job_en = "mle specialist";
    action_ru = ". Реализую ML модели на PyTorch <br> Люблю скоринговые модели и работу с временными рядами";
    action_en = ". I implement ML models in PyTorch <br> I like scoring models and working with time series";
    about_ru = "Я увлекаюсь соревнованиями на Kaggle, где использую Keras для быстрого создания моделей. Больше всего мне нравятся задачи регрессии и классификации, решаемые классическими методами машинного обучения, благодаря которым достигается высокая интерпретируемость моделей";
    about_en = "I am passionate about competitions on Kaggle, where I use Keras for fast model building. I like most of all regression and classification problems solved by classical machine learning methods, thanks to which high interpretability of models is achieved";
    goal_1_ru = "В ближайшее время я планирую получше изучить генеративные модели и написать собственную RAG LLM";
    goal_1_en = "In the near future, I plan to get a better understanding of generative models and write my own RAG LLM";
    goal_2_ru = "Также я хочу попробовать язык программирования Julia для быстрой реализации высоконагруженных программ";
    goal_2_en = "I also want to try the Julia programming language for fast implementation of highly loaded programs";
}



const textData = {
    "ru": {
        "about-me": "Обо мне",
        "work-exp": "Мой опыт работы",
        "contact-me": "Написать мне",
        "theme": "Темная тема",
        "title": `Привет! Я Минкин Даниэль - junior ${job_ru}`,
        "title-description": `Я студент ФЭН ВШЭ${action_ru}\n`,
        "about-me-text": about_ru,
        "hse-name": "НИУ «ВШЭ»",
        "hse-time-title": "Сентябрь 2023 – Настоящее время",
        "hse-status-1": "Студент",
        "hse-status-1-time": "Сентябрь 2023 – Настоящее время",
        "hse-status-1-description": "Занимаюсь изучением ML, backend и баз данных",
        "hse-status-2" : "Учебный ассистент",
        "hse-status-2-time": "Сентябрь 2024 – Настоящее время",
        "hse-status-2-description": "Помогаю ученикам на курсах \"Введение в статистику\" и \"Базы данных\"",
        "goals-title": "Мои цели",
        "goal-1": goal_1_ru,
        "goal-2": goal_2_ru,
        "cooperation": "Сотрудничество",
        "cooperation-description": "Если интересно, что я могу для вас сделать, пишите:",
        "tg-button": "Написать в Telegram",
        "resume-button": "Посмотреть резюме",
        "email-button": "Написать на почту"
    },
    "en": {
        "about-me": "About me",
        "work-exp": "Work experience",
        "contact-me": "Contact me",
        "theme": "Dark theme",
        "title": `Hi! I'm Minkin Daniel - junior ${job_en}`,
        "title-description": `I am a student of the FES HSE${action_en}\n`,
        "about-me-text": about_en,
        "hse-name": "HSE",
        "hse-time-title": "September 2023 - Present",
        "hse-status-1": "Student",
        "hse-status-1-time": "September 2023 - Present",
        "hse-status-1-description": "Engaged in learning ML, backend and databases",
        "hse-status-2" : "Teaching assistant",
        "hse-status-2-time": "September 2024 - Present",
        "hse-status-2-description": "I help students in the Introduction to Statistics and Databases courses",
        "goals-title": "My goals",
        "goal-1": goal_1_en,
        "goal-2": goal_2_en,
        "cooperation": "Working with me",
        "cooperation-description": "If you're interested in what I can do for you, write:",
        "tg-button": "Write me on Telegram",
        "resume-button": "View resume",
        "email-button": "Write to e-mail"

    }

};