import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const ItemName = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem auto;
`;

export const ItemImage = styled.img`
  display: block;
  width: 208px;
  height: 208px;
`;

export const IngredientsList = styled.ul`
  font-size: 1.25rem;
`;
