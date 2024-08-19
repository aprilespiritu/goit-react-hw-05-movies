import { getSearchMovies } from "services/tmbdAPI";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import MovieList from "components/MovieList/MovieList";
import SearchMovieForm from "components/SearchMovieForm/SearchMovieForm";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [lastPage, setLastPage] = useState(true);

    useEffect(() => {
        const query = searchParams.get('query');
        if (!query) return;
        const page = searchParams.get('page');

        const getMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                setMovies([]);
                const data = await getSearchMovies(query, page);
                setMovies(data.results);
                setLastPage(page >= data.total_pages);
            } catch (error) {
                console.log(error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [searchParams]);

    const handlePreviousClick = e => {
        setSearchParams(prev => ({
            query: prev.get('query'),
            page: parseInt(prev.get('page')) - 1,
        }));
    };

    const handleNextClick = e => {
        setSearchParams(prev => ({
            query: prev.get('query'),
            page: parseInt(prev.get('page')) + 1,
        }));
    };

    return (
        <section className="container">
            <SearchMovieForm />
            {loading && <Loader />}
            {movies.length > 0 && <MovieList movies={movies} />}
            {error !== null && <Error message={error.message} />}
            <div className={css.nav}>
                {searchParams.get('page') > 1 && (
                    <button className={css.button} onClick={handlePreviousClick}>
                        &#60
                    </button>
                )}
                {!lastPage && (
                    <button className={css.button} onClick={handleNextClick}>
                        &#62
                    </button>
                )}
            </div>
        </section>
    );
};

export default Movies;