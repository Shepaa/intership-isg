const root = document.querySelector("#root");
let isAddFilmBlockRendered = false;

function insertHTML(position, html) {
    root.insertAdjacentHTML(position, html);
}

function getFilms() {
    return JSON.parse(localStorage.getItem('films'));
}

function displayFilmInfo(film) {
    const addFilmBlock = document.querySelector("#addFilmBlock")
    if (addFilmBlock) {
        addFilmBlock.remove()
    }
    const filmInfoHTML = `
        <div id="filmDetailCard">
            <h2>${film.title}</h2>
            <p>Автор: ${film.author}</p>
            <img src="${film.imageUrl}" alt="${film.title}" style="max-width: 100%">
            <p>${film.plot}</p>
        </div>
    `;
    insertHTML("beforeend", filmInfoHTML);
}

function renderData() {
    const films = getFilms();
    const HTML = films.map(film => `
        <div class="list-film" id="${film.id}">
            <p class="list-film__p" onclick="showDetails(this)">${film.title}</p>
            <button class="edit-film-button" onclick="onEditBtnClick(this)">EDIT</button>
        </div>
    `).join("");

    const addButtonHTML = `<button onclick="openFilmForm()">Add films</button>`;
    insertHTML("afterbegin", `<div id="wrapper">${HTML + addButtonHTML}</div>`);
}

function onEditBtnClick(event) {
    const film = getFilmById(event.parentElement.id);
    openFilmForm(film);
}
    
function showDetails(event) {
    const filmDetailCard = document.querySelector("#filmDetailCard");
    const film = getFilmById(event.parentElement.id);
    if (filmDetailCard) {
        filmDetailCard.remove();
    }
    displayFilmInfo(film);
    window.history.pushState({}, '', `?id=${event.parentElement.id}#preview`);
}

function getFilmById(id) {
    const films = getFilms();
    return films.find(x => x.id.toString() === id);
}

function openFilmForm(film = '') {
    if (isAddFilmBlockRendered) {
        closeFilmForm();
        window.history.pushState({}, '', `index.html`);
        return;
    }

    const filmDetailCard = document.querySelector('#filmDetailCard');
    if (filmDetailCard) {
        filmDetailCard.remove();
    }
    const editMode = film.id ? `?id=${film.id}#edit` : '#add';

    const addFilmFormHTML = `
        <form id="addFilmBlock" data-edit-id="${film.id || ''}">
            <label for="title">Название фильма:</label>
            <input type="text" id="title" name="title" required value="${film.title || ''}"><br>

            <label for="author">Автор:</label>
            <input type="text" id="author" name="author" required value="${film.author || ''}" ><br>

            <label for="image">Посилання на картинку:</label>
            <input type="text" id="image" name="image" required value="${film.imageUrl || ''}" ><br>

            <label for="description">Короткий опис:</label>
            <textarea id="description" name="description" required>${film.plot || ''}</textarea><br>

            <button type="submit" onclick="addFilm()">Сохранить</button>
            <button onclick="onCancelBtnClick()">Отмена</button>
        </form>
    `;

    insertHTML("beforeend", addFilmFormHTML);
    isAddFilmBlockRendered = true;

    const newURL = `index.html${editMode}`;
    window.history.pushState({}, '', newURL);


}

function closeFilmForm() {
    if (isAddFilmBlockRendered) {
        const addFilmBlock = document.querySelector("#addFilmBlock");
        addFilmBlock.remove();
        isAddFilmBlockRendered = false;
    }
}

function onCancelBtnClick() {
    if (confirm("Are you sure you want to cancel?")) {
        closeFilmForm();
    }
}

function addFilm() {
    const titleValue = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const imageURL = document.querySelector("#image").value;
    const descriptionValue = document.querySelector("#description").value;
    const listFilm = document.querySelector('#wrapper');

    if (isValid(titleValue, author, imageURL, descriptionValue)) {
        alert("Please fill in all the form fields.");
        return;
    }

    const films = getFilms();
    const filmId = document.querySelector("#addFilmBlock").dataset.editId;

    if (filmId) {
        const existingFilmIndex = films.findIndex(film => film.id === filmId);
        if (existingFilmIndex !== -1) {
            films[existingFilmIndex] = {
                id: filmId,
                title: titleValue,
                author: author,
                imageUrl: imageURL,
                plot: descriptionValue
            };
        }
    } else {
        const newFilm = {
            id: Date.now().toString(),
            title: titleValue,
            author: author,
            imageUrl: imageURL,
            plot: descriptionValue
        };
        films.push(newFilm);
    }

    localStorage.setItem('films', JSON.stringify(films));

    displayFilmInfo(films[films.length - 1]);
    closeFilmForm();

    if (listFilm) {
        listFilm.remove();
        renderData();
    }
}

function isValid(title, author, imageURL, descriptionValue) {
    return !title || !author || !imageURL || !descriptionValue;
}

renderData();
