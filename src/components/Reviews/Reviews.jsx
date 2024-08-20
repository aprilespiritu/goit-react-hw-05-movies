import css from './Reviews.module.css';

const Reviews = ({ reviews }) => {
    return (
        <section className={css.section}>
            {reviews.length > 0 ? (
                <ul className={css.list}>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h4>{review.author}</h4>
                                <p className={css.text}>{review.content}</p>
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>We don't have any reviews for this movie.</p>
            )}
        </section>
    );
};

export default Reviews;