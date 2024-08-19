import { getTrending } from "services/tmbdAPI";
import { useEffect, useState } from "react";
import Loader from "components/Loader/Loader";
import MovieList from "components/MovieList/MovieList";
import Error from "components/Error/Error";
import css from './Home.module.css';

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getTrending();
                setMovies(data.results);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);
    
    return (
        <section className={`container ${css.section}`}>
            <h1 className={css.title}>Trending Movies Today</h1>
            {loading && <Loader />}
            {movie.length > 0 && <MovieList movies={movies} />}
            {error !== null && <Error message={error.message} />}
        </section>
    );
};

export default Home;