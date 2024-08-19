import css from './Error.module.css';

const Error = ({ message }) => {
    return (
        <div className={`container ${css.error}`}>
            <p>Oops! Something went wrong. Please try again.</p>
            <p>Error: {message}</p>
        </div>
    );
};

export default Error;