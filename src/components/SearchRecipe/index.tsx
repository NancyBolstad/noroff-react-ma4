import * as React from 'react';
import { searchIcon } from '../../util/icons';
import { Wrapper, SearchFormWrapper } from './styles';

interface Props {
  handler: (value: string) => any;
}

export const SearchRecipe: React.FunctionComponent<Props> = ({ handler }) => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  return (
    <Wrapper>
      <SearchFormWrapper>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();
            handler(searchValue);
          }}
        >
          <input
            id="searchForm"
            className="searchInput"
            type="text"
            aria-label="Search"
            placeholder="Search for recipe name"
            value={searchValue}
            onChange={(e: any) => {
              e.preventDefault();
              const searchValue = e.target.value.toLowerCase();
              setSearchValue(searchValue);
            }}
          />
          <button type="submit" aria-label="Search for recipe name">
            {searchIcon}
          </button>
        </form>
      </SearchFormWrapper>
    </Wrapper>
  );
};

export default SearchRecipe;
