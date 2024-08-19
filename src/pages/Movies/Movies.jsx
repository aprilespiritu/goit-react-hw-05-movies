import { getSearchMovies } from "services/tmbdAPI";
import Loader from "components/Loader/Loader";
import Error from "components/Error/Error";
import MovieList from "components/MovieList/MovieList";
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

    const handlePreviousClick
}