import { getMovieReviews } from "services/tmbdAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import Reviews from "components/Reviews/Reviews";

const ReviewsPage = () => {
    const [reviews, setReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, settError] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        if (!movieId) return;
        const getMovies = async () => {
            try {
                setLoading(true);
                settError(null);
                const data = await getMovieReviews(movieId);
                setReviews(data.results);
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
            {reviews !== null && <Reviews reviews={reviews} />}
            {error !== null && <Error message={error.message} />}
        </section>
    );
};

export default ReviewsPage;