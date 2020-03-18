import * as React from 'react';
import { searchIcon } from '../../util/icons';
import { SearchBlockWrapper, SearchFormWrapper } from '../GiphySearch/styles';

interface Props {
  filter: (input: string) => any;
}

export const Search: React.FunctionComponent<Props> = ({ filter }) => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  return (
    <SearchBlockWrapper>
      <SearchFormWrapper>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            setSearchValue(e.target.value);
            filter(searchValue);
          }}
        >
          <input
            id="searchForm"
            className="searchInput"
            type="text"
            aria-label="Search gif"
            placeholder="Search for gifs"
            value={searchValue}
            onChange={(e: any) => {
              e.preventDefault();
              setSearchValue(e.target.value);
              filter(searchValue);
            }}
          />
          <button type="submit" aria-label="Search for gifs">
            {searchIcon}
          </button>
        </form>
      </SearchFormWrapper>
    </SearchBlockWrapper>
  );
};

export default Search;
