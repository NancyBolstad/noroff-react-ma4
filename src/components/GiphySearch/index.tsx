import * as React from 'react';
import Columned from 'react-columned';
import TrendingSearch from '../TrendingSearch';
import { Result } from '../../types/data';
import fetchData from '../../util/fetchData';
import { searchIcon } from '../../util/icons';
import {
  SearchSectionWrapper,
  SearchBlockWrapper,
  SearchFormWrapper,
  ResultWrapper,
  Status,
  Gif,
} from './styles';

interface ISearchProps {}

export const GiphySearch: React.FunctionComponent<ISearchProps> = () => {
  const [searchValue, setSearchValue] = React.useState<string>('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [didntFind, setDidntFind] = React.useState(false);
  const [hasSearched, setHasSearched] = React.useState(false);
  const [searchResult, setSearchResult] = React.useState<Result[]>([]);

  const handleSearchSubmit = async (e: any) => {
    e.preventDefault();
    setHasSearched(true);
    setSearchResult([]);
    setIsLoading(true);
    search();
  };

  async function search() {
    const finding = await fetchData();
    const { results } = finding;

    if (Array.isArray(results) && results.length > 0) {
      setSearchResult(results);
      setHasSearched(true);
      setDidntFind(false);
    } else {
      setDidntFind(true);
      setSearchResult([]);
    }

    setIsLoading(false);
  }

  return (
    <SearchSectionWrapper>
      <h1>Recipe Puppy</h1>
      <SearchBlockWrapper>
        <SearchFormWrapper>
          <form onSubmit={handleSearchSubmit}>
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
              }}
            />
            <button type="submit" aria-label="Search for gifs">
              {searchIcon}
            </button>
          </form>
        </SearchFormWrapper>
      </SearchBlockWrapper>
      {!hasSearched && <TrendingSearch></TrendingSearch>}
      {hasSearched && (
        <ResultWrapper>
          {isLoading && <Status>Loading…</Status>}
          {didntFind && <Status>{`No results for ${searchValue}`}</Status>}
          {searchResult && (
            <Columned>
              {searchResult.map(element => (
                <Gif src={element.thumbnail} alt={element.title}></Gif>
              ))}
            </Columned>
          )}
        </ResultWrapper>
      )}
    </SearchSectionWrapper>
  );
};

export default GiphySearch;
