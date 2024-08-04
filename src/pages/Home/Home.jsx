import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getTrending } from '../../services/tmdbAPI';
import css from './Home.module.css';

export const Home = () => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        getTrending().then(data => {
            setTrendingMovies(data.results);
            setIsLoading(false);
        });
    }, []);

    return (
        <main>
            <h1 className={css.title}>Trending Now</h1>
            <MovieList>
                {trendingMovies.map(movie => (
                    <li key={movie.id}>
                        <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.original_title || movie.name}
                        </MovieLink>
                    </li>
                ))}
                {isLoading && <Loader />}
            </MovieList>
        </main>
    );
};

