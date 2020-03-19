import * as React from 'react';
import { Root, Result } from '../../types/data';
import fetchData from '../../util/fetchData';
import RecipeItem from '../RecipeItem';
import SearchRecipe from '../SearchRecipe';
import { Wrapper, ResultWrapper } from './styles';

interface ISearchProps {}

export const RecipeList: React.FunctionComponent<ISearchProps> = () => {
  const [data, setData] = React.useState<Result[]>([]);
  const [filteredData, setFilteredData] = React.useState<Result[]>([]);
  const [showFiltered, setShowFiltered] = React.useState(false);

  async function getAllData() {
    const finding: Root = await fetchData();
    const { results } = finding;
    setData(results);
  }

  React.useEffect(() => {
    getAllData();
  }, []);

  function filter(value: string) {
    const newArray: Result[] = data.filter(function(element) {
      const lowerCaseName = element.title.toLowerCase();
      if (lowerCaseName.toLowerCase().startsWith(value)) {
        return true;
      }
      return false;
    });
    console.log(newArray);
    setFilteredData(newArray);
    setShowFiltered(true);
  }

  return (
    <Wrapper>
      <h1>Recipe Puppy</h1>
      <SearchRecipe handler={filter} />
      {!showFiltered && (
        <ResultWrapper>
          {(data || []).map((element, index) => (
            <RecipeItem image={element.thumbnail} name={element.title} key={index}></RecipeItem>
          ))}
        </ResultWrapper>
      )}
      {showFiltered && (
        <ResultWrapper>
          {(filteredData || []).map((element, index) => (
            <RecipeItem image={element.thumbnail} name={element.title} key={index}></RecipeItem>
          ))}
        </ResultWrapper>
      )}
    </Wrapper>
  );
};

export default RecipeList;
