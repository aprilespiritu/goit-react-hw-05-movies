import { DNA } from "react-loader-spinner";
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div>
            <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass={css.loader}
            />
        </div>
    );
};

export default Loader;