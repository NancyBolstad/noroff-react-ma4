import * as React from 'react';
import { Wrapper, ItemName, ItemImage, IngredientsList } from './styles';

interface Props {
  name: string;
  image: string;
  ingredients?: string[];
}

export const RecipeItem: React.FunctionComponent<Props> = ({ name, image, ingredients }) => {
  return (
    <Wrapper>
      <ItemName>{name}</ItemName>
      <ItemImage src={image} alt={name} />
      <IngredientsList>
        <h3>Ingredients</h3>
        {(ingredients || []).map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </IngredientsList>
    </Wrapper>
  );
};

export default RecipeItem;
