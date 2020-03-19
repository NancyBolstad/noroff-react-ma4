import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: grey;
  padding: 1rem;

  @media all and (min-width: 680px) {
    width: 30%;
    margin-bottom: 1.5rem;
  }
`;

const ItemName = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem auto;
`;

const ItemImage = styled.img`
  display: block;
  width: 208px;
  height: 208px;
`;

const IngredientsList = styled.ul`
  font-size: 1.25rem;
`;

interface Props {
  name: string;
  image: string;
  ingredients: string[];
}

export const RecipeItem: React.FunctionComponent<Props> = ({ name, image, ingredients }) => {
  return (
    <Wrapper>
      <ItemName>{name}</ItemName>
      <ItemImage src={image} alt={name} />
      <IngredientsList>
        <h3>Ingredients</h3>
        {ingredients.map((ingredient, index) => {
          return <li key={index}>{ingredient}</li>;
        })}
      </IngredientsList>
    </Wrapper>
  );
};

export default RecipeItem;
