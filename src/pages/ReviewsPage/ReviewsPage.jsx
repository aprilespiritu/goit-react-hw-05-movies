import { getMovieReviews } from "services/tmbdAPI";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import Reviews from "components/Reviews/Reviews";

const ReviewsPage = () => {
    const [reviews, getReviews] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, settError] = useState(null);
    const { movieId } = useParams();

    
}