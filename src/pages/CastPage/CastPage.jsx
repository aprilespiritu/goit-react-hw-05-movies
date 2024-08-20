import { getMovieCast } from "services/tmbdAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import Cast from "components/Cast/Cast";

const CastPage = () => {
    const [cast, setCast] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;
        const getMovies = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getMovieCast(movieId);
                setCast(data.cast);
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
            {cast !== null && <Cast cast={cast} />}
            {error !== null && <Error message={error.message} />}
        </section>
    );
};

export default CastPage;