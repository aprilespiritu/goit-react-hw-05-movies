import css from './Footer.module.css';

export const Footer = () => {
    return (
        <footer>
            <p className={css.footerText}>
                &copy; {new Date().getFullYear} aprilespiritu
            </p>
        </footer>
    );
};