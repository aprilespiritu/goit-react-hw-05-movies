import css from './Searchbar.module.css';

export const SearchInput = () => (
    <Input
        type="text"
        name="movieName"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="May contain letters, apostrophe, dashes and spaces only."
        required
        autoComplete="off"
        autoFocus
        placeholder="Search movie..."
    />
);