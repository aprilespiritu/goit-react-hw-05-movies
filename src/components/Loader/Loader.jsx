import { DNA } from "react-loader-spinner";
import css from './Loader.module.css';

const Loader = () => {
    return (
        <>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass={css.loader}
            />
        </>
    );
};

export default Loader;