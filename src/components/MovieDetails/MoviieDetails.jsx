import { useLocation, Link, NavLink, Outlet } from "react-router-dom";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import css from './MovieDetails.module.css';

const MovieDetails = ({ details }) => {
    const defaultImg = 'https://fakeimg.pl/350x200/?text=No%20Image%20Found';
    const { genres, title, release_date, overview, poster_path, vote_average } = details;
    const location = useLocation();
    const backLink = location.state?.from ?? '/';

    return (
        <section class={`container ${css.section}`}>
            <Link className={css['back-link']} to={backLink}>
                <HiArrowNarrowLeft size={16} /> Go Back
            </Link>
            <div class={css['movie-details']}>
                <img
                    src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : defaultImg}
                    width={300}
                    alt={title}
                />
                <div className={css.details}>
                    <h1 className={css.title}>
                        {title} ({release_date.slice(0, 4)})
                    </h1>
                    <p>Votes: {(vote_average * 10).toFixed(2)}%</p>
                    <h2 className={css['overview-title']}>Overview</h2>
                    <p>{overview}</p>
                    <h3 className={css['genres-title']}>Genres</h3>
                    <ul className={css['genres-list']}>
                        {genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
            <h3 className={css['add-info']}>Additional Information</h3>
            <ul className={css['add-list']}>
                <li>
                    <NavLink className={css['add-link']} to="cast" state={{ from: backLink }}>
                        Cast
                    </NavLink>
                </li>
                <li>
                    <NavLink className={css['add-link']} to="reviews" state={{ from: backLink }}>
                        Reviews
                    </NavLink>
                </li>
            </ul>
            <hr />
            <Outlet />
        </section>
    );
};

export default MovieDetails;
