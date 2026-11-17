const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const movieName = input.value.trim();

    console.log("Filme pesquisado:", movieName);
});
