// header.js
function generateHeader() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    const role = user ? user.role : null; 
    const header = document.createElement("div");
    header.classList.add("header");

    const navCenter = document.createElement("div");
    navCenter.classList.add("nav-center");

    const navRight = document.createElement("div");
    navRight.classList.add("nav-right");

    if (role === "admin") {
        navCenter.innerHTML = `
            <a href="AdmStr.html">Забронированные книги</a>
            <a href="SpisokBook.html">Библиотека</a>
            <a href="CreateBook.html">Добавить книгу</a>
            <a href="Bron.html">Заявки</a>
        `;
    } else if (role === "Преподаватель" || role === "Студент") {
        navCenter.innerHTML = `
            <a href="SpisokBook.html">Библиотека</a>
            <a href="Account.html">Профиль</a>
        `;
    } else {
        navCenter.innerHTML = `
            <a href="SpisokBook.html">Библиотека</a>
            <a href="Account.html">Профиль</a>
        `;
    }

    navRight.innerHTML = `<a href="index.html">Выйти</a>`;

    header.appendChild(navCenter);
    header.appendChild(navRight);

    document.body.insertBefore(header, document.body.firstChild);
}

document.addEventListener("DOMContentLoaded", generateHeader);
