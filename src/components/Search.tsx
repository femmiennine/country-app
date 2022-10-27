import { useEffect, useState } from 'react';
import { useAppDispatch } from '../app/hooks';
import { search } from '../features/countriesSlice';
import "../styles/Search.css"

const Search = () => {
  const [countrySearch, setCountrySearch] = useState<string | number>('');
  const dispatch = useAppDispatch();

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setCountrySearch(event.target.value);
  };

  useEffect(() => {
    dispatch(search(countrySearch));
  }, [countrySearch, dispatch]);

  return (
    <div className="searchbar__container">
        <input
            className="searchbar"
            placeholder="Search for a country..."
            onChange={handleOnChange}
          />
  </div>
  );
};

export default Search;