import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  background-color: #000000;
  color: #ffffff;
  flex-direction: column;
  width: 85vw;
  margin: 0 auto;

  h1 {
    margin: 2rem auto;
    font-size: 2.2rem;
  }
`;

export const ResultWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media all and (min-width: 680px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const Status = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  font-size: 1.375rem;
  font-weight: bold;
  color: #ffd635;
  animation: pop-in 0.6s ease-out forwards;

  @keyframes pop-in {
    0% {
      opacity: 0;
      transform: translateY(-4rem) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
`;
