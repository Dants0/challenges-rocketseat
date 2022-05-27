import { api } from './api.js';

const BASE_URL = api.BASE_URL
const language = api.language


export async function getPopularMovies(randomMovie) {
    let data = []
    let page = 1;
    if(getPopularMovies){
        page = Math.floor(1+Math.random()*287);
        randomMovie = page
    }

    try {
        const response = await fetch(`${BASE_URL}${language}&page=${randomMovie}`)
        const responseData = await response.json()
        data = responseData?.results
    } catch (error) {
        
    }
    return data
}

