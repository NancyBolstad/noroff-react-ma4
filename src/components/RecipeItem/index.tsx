import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: grey;

  @media all and (min-width: 680px) {
    width: calc(31.3333% - 2rem);
    margin-bottom: 1.5rem;
  }
`;

const ItemName = styled.h2`
  font-weight: bold;
  font-size: 2rem;
`;

const ItemImage = styled.img`
  display: block;
  width: 100%;
`;

interface Props {
  name: string;
  image: string;
}

export const RecipeItem: React.FunctionComponent<Props> = ({ name, image }) => {
  return (
    <Wrapper>
      <ItemName>{name}</ItemName>
      <ItemImage src={image} alt={name} />
    </Wrapper>
  );
};

export default RecipeItem;
