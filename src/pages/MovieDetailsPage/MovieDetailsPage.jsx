import { getMovieDetails } from "services/tmbdAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import MovieDetails from "components/MovieDetails/MoviieDetails";

const MovieDetailsPage = () => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;

        const getMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getMovieDetails(movieId);
                setDetails(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [movieId]);

    return (
        <section>
            {loading && <Loader />}
            {details !== null && <MovieDetails details={details} />}
            {error !== null && <Error message={error.message} />}
        </section>
    );
};

export default MovieDetailsPage;