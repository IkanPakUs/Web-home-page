import * as api from './api.js';

// Helpers
const $  = (el) => {
    return document.querySelector(el);
};

const all = (el) => {
    return document.querySelectorAll(el);
}

Date.prototype.addDays = function (days) {
    let date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

// Global variable
const title_name = "Mang Arya";

const menu_list = [
    {
        title: "Gallery",
        icon: "bi-columns-gap"
    },
    {
        title: "Calendar",
        icon: "bi-calendar4-week"
    }
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
                favicon: "https://res.cloudinary.com/didlpymlt/image/upload/v1656312889/WebIcon/github-logo_omewut.png",
                name: "Github",
                link: "https://github.com",
                link_name: "github.com"
            },
            {
                favicon: "https://a.trellocdn.com/prgb/dist/images/ios/apple-touch-icon-152x152-precomposed.f2e3f1c236fc15986203.png",
                name: "Trello",
                link: "https://trello.com/komangarya1/boards",
                link_name: "trello.com"
            },
        ]
    },
    {
        title: "Programing",
        bg_color: "#202647",
        list: [
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
        title: "Design",
        bg_color: "#0a5457",
        list: [
            {
                favicon: "https://cdn.dribbble.com/assets/favicon-b38525134603b9513174ec887944bde1a869eb6cd414f4d640ee48ab2a15a26b.ico",
                name: "Dribble",
                link: "https://dribbble.com/",
                link_name: "dribbble.com"
            },
            {
                favicon: "https://static.figma.com/app/icon/1/favicon.svg",
                name: "Figma",
                link: "https://www.figma.com/files/recent?fuid=936846913075180406",
                link_name: "figma.com"
            },
            {
                favicon: "https://app.diagrams.net/images/favicon-16x16.png",
                name: "Draw.io",
                link: "https://app.diagrams.net/",
                link_name: "draw.io"
            },
            {
                favicon: "https://www.pexels.com/assets/static/images/meta/favicon.ico",
                name: "Pexels",
                link: "https://www.pexels.com/",
                link_name: "pexels.com"
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
            {
                favicon: "https://elearning.stikom-bali.ac.id/pluginfile.php/1/theme_mb2mcl/favicon/1646982263/itbstikombali.ico",
                name: "E-Learning Stikom Bali",
                link: "https://elearning.stikom-bali.ac.id",
                link_name: "elearning.stikom-bali.ac.id"
            },
            {
                favicon: "https://sion.stikom-bali.ac.id/assets/images/icon.png",
                name: "Sion Stikom Bali",
                link: "https://sion.stikom-bali.ac.id/",
                link_name: "sion.stikom-bali.ac.id"
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
    $('.content').innerHTML = preload();

    load["Gallery"]();

    const list_el_menu = all('.menu a');

    list_el_menu.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();

            const selected_page = e.target.getAttribute('page');
            load[selected_page]();

            $('.menu.active').classList.remove("active");
            $(`.menu[page="${selected_page}"]`).classList.add("active");
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
    "Calendar": () => {
        $('.content').innerHTML = preload();

        getEvent().then(() => {
            const schedule = templateSchedule();
    
            $('.content').innerHTML = schedule;
    
            loadDateNow();
        });

    }
}

const loadDateNow = (year, month) => {
    const info_header = year ? new Date(year, month, 1) : new Date();

    $('.header__info .month').innerHTML = info_header.toLocaleString('en-US', { month: 'short' });
    $('.header__info .month').setAttribute('month', info_header.getMonth());

    $('.header__info .year').innerHTML = info_header.getFullYear();
    $('.header__info .year').setAttribute('year', info_header.getFullYear());

}

const loadCalendar = (year, month) => {
    let date = new Date(year, month, 1);
    let dates = [];

    while(date.getMonth() == month) {
        dates = [...dates, new Date(date)];
        date.setDate(date.getDate() + 1);
    }

    return dates;
}

const getEvent = () => {
    return new Promise(resolve => {
        let sync_time = localStorage.getItem('last_sync') ?? null;
        sync_time = typeof sync_time == "string" ? JSON.parse(sync_time) : sync_time;
        
        if (sync_time) {
            const sync_date = new Date(sync_time.time).getDate();
            const now_date = new Date().getDate();

            if (sync_date == now_date) {
                return resolve(true);
            }
        }

        api.getEventFromGitlab().then((res) => {

            res.reverse().forEach(event => {
                const time_start = event.created_at.substr(11, 5).split(":").map((v, i) => i == 0 ? (Number(v) + 8 > 9 ? Number(v) + 8 : "0" + (Number(v) + 8).toString()) : v).join(":");

                let input = {
                    date: event.created_at.substr(0, 10).split("-"),
                    title: event.title,
                    time_start: time_start,
                    time_end: time_start.split(":")[0] >= 17 ? time_start : "17:00",
                    desc: event.description,
                }
    
                input.date[0] = Number(input.date[0]);
                input.date[1] = Number(input.date[1]);
                input.date[2] = Number(input.date[2]);
    
                addData({input});
            });

            const sync = { 
                time: new Date().toISOString(), 
                status: "success" 
            }

            localStorage.setItem('last_sync', JSON.stringify(sync));

            return resolve(true);
        }).catch((err) => {
            console.log(err);
            return resolve(true);
        });

    })
}

const addData = ({input}) => {
    let events = localStorage.getItem('events') ?? [];
    let create_new = true;

    if (typeof events == "string") {
        events = JSON.parse(events);

        const day_event = events.find((v) => {
            return v.date == input.date.at(2) && v.month == input.date.at(1) && v.year == input.date.at(0);
        });

        if (day_event) {
            const data = {
                id: day_event.events.length,
                from: input.time_start,
                to: input.time_end,
                title: input.title,
                desc: input.desc,
            }
            
            const existing_event = day_event.events.find((v) => {
                return v.title == data.title;
            });

            if (!existing_event) {
                day_event.events = [...day_event.events, data];
                create_new = false;
            }
        }
    }

    if (typeof events == "object" && create_new) {
        const data = {
            id: events.length,
            date: input.date.at(2),
            month: input.date.at(1),
            year: input.date.at(0),
            events: [
                {
                    from: input.time_start,
                    to: input.time_end,
                    title: input.title,
                    desc: input.desc,
                }
            ]
        }

        events = [...events, data];
    }

    localStorage.setItem('events', JSON.stringify(events));
}

// Template
const preload = () => {
    return `<div class="loading-wrap">
                <div class="loading"></div>
            </div>`;
}

const templateMenu = (data_menu, index) => {
    return `<li>
                <div class="menu ${index == 0 ? 'active' : ''}" page="${data_menu.title}">
                    <a href="#" page="${data_menu.title}"> 
                        <i class="bi ${data_menu.icon}" page="${data_menu.title}"></i>
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
                            <img class="icon__image" loading="lazy" src="${data_card.favicon}" alt=${data_card.name}">
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

const templateSchedule = () => {
    const calendar = templateCalendar();

    return `<div class="schedule">
                <div class="calendar-wrap">
                    ${calendar}
                </div>
            </div>`
}

const templateCalendar = () => {
    const days = templateDays();
    const dates = templateDates();

    return `<div class="calendar__header">
                <div class="header__info">
                    <span class="month" month=""></span>
                    <span class="year" year=""></span>
                </div>
            </div>
            <div class="calendar__body">
                <table class="calendar__table">
                    <thead class="table__day">
                        <tr>
                            ${days}
                        </tr>
                    </thead>
                    <tbody class="table__date">
                        ${dates}
                    </tbody>
                </table>
            </div>`
}

const templateDays = () => {
    const date = new Date();
    const day_now = date.getDay();
    const month_now = date.getMonth();
    const year_now = date.getFullYear();

    const year_selected = $('.year') ? $('.year').getAttribute('year') : year_now;
    const month_selected = $('.month') ? $('.month').getAttribute('month') : month_now;
    
    const days = [
        {
            id: 0,
            day: "SUN"
        },
        {
            id: 1,
            day: "MON"
        },
        {
            id: 2,
            day: "TUE"
        },
        {
            id: 3,
            day: "WED"
        },
        {
            id: 4,
            day: "THU"
        },
        {
            id: 5,
            day: "FRI"
        },
        {
            id: 6,
            day: "SAT"
        },
    ];

    return days.map((v) => {
        return `<td ${day_now == v.id && month_now == month_selected && year_now == year_selected ? "class='active'" : ""}>${v.day}</td>`;
    }).join(" ");
}

const templateDates = () => {
    const year = $('.year') ? $('.year').getAttribute('year') : (new Date()).getFullYear();
    const month = $('.month') ? $('.month').getAttribute('month') : (new Date()).getMonth();

    let dates = loadCalendar(year, month);

    return dates.map((date) => {
        return 6 - (date.getDay() % 7) == 0 ? `{\"day\": ${date.getDay()}, \"date\": ${date.getDate()}, \"month\": ${date.getMonth()}, \"year\": ${date.getFullYear()}}-` 
                                            : `{\"day\": ${date.getDay()}, \"date\": ${date.getDate()}, \"month\": ${date.getMonth()}, \"year\": ${date.getFullYear()}}.`;
    }).join("").split("-").map((v) => v.split('.').filter((v) => v != "")).filter(v => v.length).map((week) => {
        return templateWeek(week);
    }).join(" ");
}

const templateWeek = (arr) => {
    let day_obj = arr.map(v => JSON.parse(v));

    const date = new Date();
    const date_now = date.getDate();
    const month_now = date.getMonth();
    const year_now = date.getFullYear();
    
    const selected_month = $('.month') ? $('.month').getAttribute('month') : month_now;

    if (day_obj.length < 7) {
        let fill_date = [];
        const empty_date = 7 - day_obj.length;

        if (day_obj.at(0)?.day == 0) {
            fill_date = "date,".repeat(empty_date).split(",").filter(v => v != "").map((v, i) => {
                let last_date = day_obj.at(-1);
                last_date = new Date(last_date.year + "-" + (Number(last_date.month) + 1).toString() + "-" + last_date.date);

                const expect_date = last_date.addDays(i + 1);

                return ({
                    day: expect_date.getDay(),
                    date: expect_date.getDate(), 
                    month: expect_date.getMonth(),
                    year: expect_date.getFullYear(),
                });
            });
        }

        if (day_obj.at(-1)?.day == 6) {
            fill_date = "date,".repeat(empty_date).split(",").filter(v => v != "").map((v, i) => {
                let first_date = day_obj.at(0);
                first_date = new Date(first_date.year + "-" + (Number(first_date.month) + 1).toString() + "-" + first_date.date);

                const expect_date = first_date.addDays(-(i + 1));

                return ({
                    day: expect_date.getDay(),
                    date: expect_date.getDate(),
                    month: expect_date.getMonth(),
                    year: expect_date.getFullYear(),
                });
            });
        }

        day_obj = [...day_obj, ...fill_date];
    }

    const date_week = [0, 1, 2, 3, 4, 5, 6].map(v => {
        const date = day_obj.find(i => i.day == v);
        const class_list = [date?.date == date_now && date?.month == month_now && date?.year == year_now ? 'active' : "", date?.month != selected_month ? 'ls-month' : '' ].filter(v => v != "").join(" ");

        const event = templateCountEvent(date);

        return `<td date="${Number(date.year)}-${Number(date.month)}-${Number(date.date)}" class="date ${class_list}">
                    ${date?.date ?? ""}
                    <div class="event-dot">${event}</div>
                </td>`
    }).join(" ");

    return `<tr>
              ${date_week}  
            </tr>`
}

const templateCountEvent = (date) => {
    const events = localStorage.getItem('events');
    const event_day = typeof events == "string" ? JSON.parse(events).find(v => v.date == date.date && v.month == (date.month + 1) && v.year == date.year) : null;
    
    return event_day ? "<span></span>".repeat(event_day?.events?.length) : "";
}