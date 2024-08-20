import css from './Cast.module.css';

const Cast = ({ cast }) => {
    const defaultImg = 'https://fakehttps://fakeimg.pl/350x200/?text=No+Image+Found';

    return (
        <section className={css.section}>
            {cast.length > 0 ? (
                <ul className={css.list}>
                    {cast.map(actor => {
                        const { id, name, profile_path, character } = actor;
                        return (
                            <li key={id} className={css.card}>
                                <img src={
                                    profile_path
                                        ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                                        : defaultImg
                                }
                                    width={150}
                                    alt="poster"
                                />
                                <h4>{name}</h4>
                                <p>Character: {character}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>We don't have any cast for this movie.</p>
            )}
        </section>
    );
};

export default Cast;