const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const row = document.querySelector('.row');
const form = document.querySelector(".form");
const search = document.querySelector(".search");

let i = 1;
function showMovies(url, page = 1) {
    const ul = document.querySelector('.paging');
    ul.onclick = function (event) {
        i = i + 1;
        if (i < 11) {
            showMovies(url, i);
        }
        else {
            ul.style.display = 'none';
        }
    };
    fetch(url + page).then(res => res.json())
        .then((data) => {

            data.results.forEach(element => {
                const col = document.createElement('div');
                col.classList.add('col');
                col.classList.add('mt-2');

                col.innerHTML = `
            <div class="card" style="width: 18rem; height: 501px;">
                <img src="${IMGPATH + element.poster_path}" class="card-img-top" alt="${element.title}">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                </div>
            </div>`

                row.appendChild(col);
            })
        })
}
showMovies(apiUrl);

form.addEventListener("submit", (e) => {
    e.preventDefault();
    row.innerHTML = '';

    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(SEARCHAPI, searchTerm);
        search.value = "";
    }
});


