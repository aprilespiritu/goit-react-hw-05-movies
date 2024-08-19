import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul className={css.list}>
            {movies.map(movie => {
                return (
                    <li key={movie.id}>
                        <Link
                            className={css.link}
                            to={`/movies/${movie.id}`}
                            state={{ from: location }}
                        >
                            {movie.title}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default MovieList;