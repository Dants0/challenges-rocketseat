import { getPopularMovies } from "../api/route.js";
import {api} from '../api/api.js'

const btnMovie = document.getElementById('random-movie');
const movieDiv = document.getElementById("contentMovie")

btnMovie.addEventListener('click', createPostMovie);

function createPostMovie(){
  renderMovies();
}

export async function renderMovies() {
    const movies = await getPopularMovies()
    console.log(movies)
    movieDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("")
}

function renderSingleMovie(movie) {
    return (
        `
        <div>
        <span class="title-fluid">"${movie?.title}"</span>
        <img src="${api.IMG_URL + movie?.poster_path}" class="img-fluid">
            <span class="desc-fluid">"Nota: ${movie?.vote_average}"</span>
            <span class="desc-fluid">"${movie?.overview}"</span>
            <hr>
        </div>
        `
    )
}