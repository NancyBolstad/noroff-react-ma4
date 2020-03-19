import * as React from 'react';
import { Root, Result } from '../../types/data';
import fetchData from '../../util/fetchData';
import RecipeItem from '../RecipeItem';
import SearchRecipe from '../SearchRecipe';
import { Wrapper, ResultWrapper, Status } from './styles';

interface Props {}

export const RecipeList: React.FunctionComponent<Props> = () => {
  const [data, setData] = React.useState<Result[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    async function getAllData() {
      const finding: Root = await fetchData();
      const { results } = finding;
      setData(results);
      setLoading(false);
    }
    getAllData();
  }, []);

  function filter(value: string) {
    const newArray: Result[] = data.filter(function(element) {
      const lowerCaseName = element.title.toLowerCase();
      if (lowerCaseName.startsWith(value)) {
        return true;
      }
      return false;
    });
    setData(newArray);
  }

  return (
    <Wrapper>
      <h1>Recipe Puppy</h1>
      <SearchRecipe handler={filter} />
      <ResultWrapper>
        {loading && <Status>Loading ...</Status>}
        {(data || []).map((element, index) => (
          <RecipeItem
            key={index}
            image={element.thumbnail}
            name={element.title}
            ingredients={element.ingredients.split(',')}
          ></RecipeItem>
        ))}
      </ResultWrapper>
    </Wrapper>
  );
};

export default RecipeList;
