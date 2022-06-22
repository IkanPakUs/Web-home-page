// Helpers
const $  = (el) => {
    return document.querySelector(el);
};

// Global variable
const data_list = [
    {
        title: "Work",
        bg_color: "bg-red",
        list: [
            {
                favicon: "https://gitlab.com/favicon.ico",
                name: "Gitlab",
                link: "https://gitlab.com",
                link_name: "gitlab.com",
            },
            {
                favicon: "https://github.com/favicon.ico",
                name: "Github",
                link: "https://github.com",
                link_name: "github.com"
            },
            {
                favicon: "https://laravel.com/img/favicon/favicon-32x32.png",
                name: "Laravel",
                link: "https://laravel.com",
                link_name: "laravel.com"
            },
            {
                favicon: "https://expressjs.com/images/favicon.png",
                name: "Express Js",
                link: "https://expressjs.com",
                link_name: "expressjs.com"
            },
            {
                favicon: "https://vuejs.org/logo.svg",
                name: "Vue Js",
                link: "https://vuejs.org",
                link_name: "vuejs.org"
            },
            {
                favicon: "https://developer.mozilla.org/favicon.ico",
                name: "Javascript Mdn",
                link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
                link_name: "developer.mozilla.org"
            },
            {
                favicon: "https://getbootstrap.com/favicon.ico",
                name: "Bootstrap",
                link: "https://getbootstrap.com",
                link_name: "getbootstrap.com"
            },
        ]
    },
    {
        title: "Entertaint",
        bg_color: "bg-green",
        list: [
            {
                favicon: "https://www.youtube.com/favicon.ico",
                name: "Youtube",
                link: "https://www.youtube.com",
                link_name: "youtube.com"
            },
            {
                favicon: "https://www.netflix.com/favicon.ico",
                name: "Netflix",
                link: "https://www.netflix.com/browse",
                link_name: "netflix.com"
            },
            {
                favicon: "https://secure-media.hotstar.com/web-assets/prod/D+H_favicon.ico",
                name: "Disney Plus Hotstar",
                link: "https://www.hotstar.com/id",
                link_name: "hotstar.com"
            },
        ]
    },
    {
        title: "Personal",
        bg_color: "bg-blue",
        list: [
            {
                favicon: "https://mail.google.com/favicon.ico",
                name: "Gmail",
                link: "https://mail.google.com/mail/u/0/#inbox",
                link_name: "mail.google.com"
            },
        ]
    }
]

// Method
document.addEventListener('DOMContentLoaded', () => {
    loadSection();
}, false);

const loadSection = () => {
    const element = data_list.map((list) => {
        return templateSection(list);
    }).join(" ");

    $('.content').innerHTML = element;
}

const templateSection = (data_section) => {
    const data_card = data_section.list.map((card) => {
        return templateCard(card);
    }).join(" ");

    return `<div class="section">
                <div class="title-info ${data_section.bg_color}">
                    ${data_section.title}
                </div>
                <div class="card-section">
                    ${data_card}
                </div>
            </div>`
}

const templateCard = (data_card) => {
    return `<div class="card">
                <a class="card__info" href="${data_card.link}">
                    <div class="top__info">
                        <div class="info__icon">
                            <img class="icon__image" src="${data_card.favicon}" alt=${data_card.name}">
                        </div>
                        <div class="info__title">
                            <h5> ${data_card.name}</h5>
                        </div>
                    </div>
                    <div class="info__link">
                        <span>${data_card.link_name}</span>
                    </div>
                </a>
            </div>`
}