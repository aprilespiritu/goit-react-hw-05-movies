import PropTypes from 'prop-types';
import css from './Searchbar.module.css';
import { Children } from 'react';

export const SearchForm = ({ onSubmit, Children }) => (
    <Form onSubmit={onSubmit}>{Children}</Form>
);

SearchForm.propTypes = {
    onSubmit: propTypes.func.isRequired,
};

