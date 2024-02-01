const btn = document.querySelector('#getWaitersBtn');
const list = document.querySelector('#list');
const inputEl = document.querySelector('#input');
const loader = document.querySelector('#loader');

let debounceTimer;

inputEl.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        onBtnClick();
    }, 300);
});


function onBtnClick() {
    loader.style.display = 'block';
    fetch(`https://api.github.com/users/${inputEl.value}/repos`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
        })
        .then((respond) => {
            loader.style.display = 'none';
            list.innerHTML = ''; // Clear previous results
            respond.forEach((repo) => {
                renderData(repo);
            });
        })
        .catch((error) => {
            loader.style.display = 'none';
            alert(error);
        });
}

function renderData(data) {
    const HTML = `
        <div class="repository-card">
        <h2 class="repository-name">${data.name}</h2>
        <p class="repository-language">${data.language}</p>
        <a href="${data.html_url}" class="repository-link" target="_blank">Ссылка на репозиторий</a>
        </div>`;
    list.insertAdjacentHTML("beforeend", HTML);
}
