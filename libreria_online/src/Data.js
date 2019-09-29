export var infoPerson = { src: "person.png", name: "Juan", bookNum: 23, bookR: 11 };
export var dataBooks = [
    { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo" },
    { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "logo192.png", alt: "algo" },
    { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "logo192.png", alt: "algo" },
    { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "logo192.png", alt: "algo" },
    { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "logo192.png", alt: "algo" },
    { name: 'Libro 6', isbn: 6, author: 'autor6', date: 'date6', img: "logo192.png", alt: "algo" },
    { name: 'Libro 7', isbn: 7, author: 'autor7', date: 'date7', img: "logo192.png", alt: "algo" },
    { name: 'Libro 8', isbn: 8, author: 'autor8', date: 'date8', img: "logo192.png", alt: "algo" }
];

export let finaldataBooks = [
    { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "logo192.png", alt: "algo", criticism: "", summary: "" },
    { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "logo192.png", alt: "algo" },
    { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "logo192.png", alt: "algo" },
    { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "logo192.png", alt: "algo" },
    { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "logo192.png", alt: "algo" },
];

export let recomendBooks = [
    { name: 'Libro 1', isbn: 1, author: 'autor1', date: 'date1', img: "favicon.ico", alt: "algo", criticism: "", summary: "" },
    { name: 'Libro 2', isbn: 2, author: 'autor2', date: 'date2', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 3', isbn: 3, author: 'autor3', date: 'date3', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 4', isbn: 4, author: 'autor4', date: 'date4', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 5', isbn: 5, author: 'autor5', date: 'date5', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 6', isbn: 6, author: 'autor6', date: 'date6', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 7', isbn: 7, author: 'autor7', date: 'date7', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 8', isbn: 8, author: 'autor8', date: 'date8', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 9', isbn: 9, author: 'autor9', date: 'date9', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 10', isbn: 10, author: 'autor10', date: 'date10', img: "favicon.ico", alt: "algo" },
    { name: 'Libro 11', isbn: 11, author: 'autor11', date: 'date11', img: "favicon.ico", alt: "algo" }
];

export let urlBooks = [
    "css_cookbook", "asia", "colombia", "google", "europa", "republica_popular_china"
];

// addQuestion(id, title, option1, option2, option3, option4) {
export let tempQuestions = [
    { id: 'Q_1', title: "¿2 + 2 es 4?", option1: 'es 12', option2: 'option21', option3: "logo192.png", option4: "algo" },
    { id: 'Q_2', title: "¿2 + 3 es 4?", option1: 'es 12', option2: 'option22', option3: "logo192.png", option4: "algo" },
    { id: 'Q_3', title: "¿2 + 4 es 4?", option1: 'es 12', option2: 'option23', option3: "logo192.png", option4: "algo" },
    { id: 'Q_4', title: "¿2 + 5 es 4?", option1: 'es 12', option2: 'option24', option3: "logo192.png", option4: "algo" },
    { id: 'Q_5', title: "¿2 + 6 es 4?", option1: 'es 12', option2: 'date5', option3: "logo192.png", option4: "algo" }
];
export let logged = false;
export function setLogged(log_on) {
    logged = log_on;
}
export let tempUser = {};
export function setTempUser(user) {
    tempUser = user;
}

export let tempBooks = [];
export function setTempBooks(books) {
    tempBooks = books;
}

export let users = [];
export function setUsers(newUsers) {
    users = newUsers;
}