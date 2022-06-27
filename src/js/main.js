// Helpers
const $  = (el) => {
    return document.querySelector(el);
};

const all = (el) => {
    return document.querySelectorAll(el);
}

// Global variable
const title_name = "Mang Arya";

const menu_list = [
    {
        title: "Gallery",
        icon: "bi-columns-gap"
    },
];

const gallery_list = [
    {
        title: "Work",
        bg_color: "#472620",
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
        bg_color: "#26551C",
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
        bg_color: "#87612B",
        list: [
            {
                favicon: "https://mail.google.com/favicon.ico",
                name: "Gmail",
                link: "https://mail.google.com/mail/u/0/#inbox",
                link_name: "mail.google.com"
            },
            {
                favicon: "https://static-exp2.licdn.com/sc/h/akt4ae504epesldzj74dzred8",
                name: "Linkedin",
                link: "https://www.linkedin.com/",
                link_name: "linkedin.com"
            },
        ]
    }
]

// Method
document.addEventListener('DOMContentLoaded', () => {
    loadTitle();
    loadMenu();
    loadSection();
}, false);

const loadTitle = () => {
    $('#home h1 span').innerHTML = title_name;
}

const loadMenu = () => {
    const menu = menu_list.map((list, i) => {
        return templateMenu(list, i);
    }).join(" ");

    $('.nav ul').innerHTML = menu;
}

const loadSection = () => {
    load["Gallery"]();

    const list_el_menu = all('.menu a');

    list_el_menu.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            const selected_page = e.target.getAttribute('page');
            load[selected_page]();
        });
    });
}

const load = {
    "Gallery": () => {
        const element = gallery_list.map((list) => {
            return templateSection(list);
        }).join(" ");

        $('.content').innerHTML = element;
    },
}


// Template
const templateMenu = (data_menu, index) => {
    return `<li>
                <div class="menu ${index == 0 ? 'active' : ''}">
                    <a href="#" page="${data_menu.title}"> 
                        <i class="bi ${data_menu.icon}"></i>
                        ${data_menu.title}
                    </a>
                </div>
            </li>`
}

const templateSection = (data_section) => {
    const data_card = data_section.list.map((card) => {
        return templateCard(card);
    }).join(" ");

    return `<div class="section">
                <div class="title-info" style="background-color: ${data_section.bg_color}">
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