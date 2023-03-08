import axios from 'axios';

const MOVIE_API_BASE_URL = "http://localhost:8080"  ;

class MovieService {

    getMovie(){
        return axios.get(MOVIE_API_BASE_URL);
    }

    createMovie(movie){
        return axios.post(MOVIE_API_BASE_URL, movie);
    }

    getMovieById(id){
        return axios.get(MOVIE_API_BASE_URL + '/' + id);
    }
 
    updateMovie(movie, id){
        return axios.put(MOVIE_API_BASE_URL + '/' + id, movie);
    }

    deleteMovie(id){
        return axios.delete(MOVIE_API_BASE_URL + '/' + id);
    }
}

export default new MovieService()