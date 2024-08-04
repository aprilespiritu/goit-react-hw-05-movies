import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
    return (
        <Container>
            <Header>
                <nav>
                    <Link to="/" end>
                        Home
                    </Link>
                    <Link to="/movies">
                        Movies
                    </Link>
                </nav>
            </Header>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Container>
    );
};