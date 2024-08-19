import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from 'react';
import Loader from "components/Loader/Loader";
import css from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={css.header}>
                <nav>
                    <ul className={css['nav-list']}>
                        <li>
                            <NavLink className={css.link} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className={css.link} to="/movies">
                                Movies
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
};

export default Header;