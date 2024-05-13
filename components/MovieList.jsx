import { useState, useEffect } from "react";
function MovieList(){
    const [movies, setMovies] = useState([]);
    useEffect(async()=> {
        const response = await fetch("api/movies");
        const movies = await response.json();
        console.log(movies);
        setMovies(movies);
    }, []);
    return(
        <div>
            <h1>Movies List</h1>
            <ul>
                {movies.map(movie => {
                    return(
                        <li key={movie.id}>
                            {movie.title} - {movie.releaseYear}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
export default MovieList;