import styled from 'styled-components';
export const SearchSectionWrapper = styled.div`
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

export const SearchBlockWrapper = styled.div`
  padding-bottom: 3rem;
  width: 80vw;
  margin: 0 auto;
`;

export const SearchFormWrapper = styled.div`
  form {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    width: 80vw;
    box-shadow: 10px 10px 5px 0px #0002f1;

    @media screen and (min-width: 768px) {
      width: 60vw;
    }

    @media screen and (min-width: 1080px) {
      width: 52vw;
    }
  }

  input[type='text'] {
    border: none;
    background: #e9e9e9;
    white-space: nowrap;
    padding: 0.55rem 0.75rem;
    border: none;
    font-size: 1.1em;
    text-decoration: none;
    line-height: normal;
    height: 2rem;
    flex-grow: 1;
    width: 40vw;
  }

  button[type='submit'] {
    background-color: #09ebaf;
    color: black;
    border: none;
    cursor: pointer;
    flex-grow: 1;
    width: 10vw;

    svg {
      height: 1.5rem;
      width: 1.5rem;
      fill: black;
    }

    @media screen and (min-width: 1080px) {
      width: 3rem;
    }
  }

  input[type='text']:focus {
    background: #ffffff;
    outline: none;
    border: 2px solid #09ebaf;
  }

  button[type='submit']:focus {
    outline: none;
  }
  button[type='submit']:hover {
    opacity: 0.7;
  }
`;

export const ResultWrapper = styled.div`
  padding: 30px;
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

export const Gif = styled.img`
  display: block;
  width: 100%;
  margin: 0.3rem;
`;
