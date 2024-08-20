import { Link, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Header from './Header/Header';
import MovieDetailsPage from '../pages/MovieDetailsPage/MovieDetailsPage';
import CastPage from '../pages/CastPage/CastPage';
import ReviewsPage from '../pages/ReviewsPage/ReviewsPage';
import Movies from '../pages/Movies/Movies';

const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route
            path="*"
            element={
              <section className="container">
                <Link className="go-to-home" to="/">
                  Go to homepage
                </Link>
              </section>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

//export default App;