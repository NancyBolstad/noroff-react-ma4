import * as React from 'react';
import styled from 'styled-components';
import Columned from 'react-columned';
import { Root, Result } from '../../types/data';
import fetchData from '../../util/fetchData';

interface Props {}

const Gif = styled.img`
  display: block;
  width: 100%;
  margin: 0.3rem;
`;

export const TrendingSearch: React.FunctionComponent<Props> = () => {
  const [trendingImages, setTrendingImages] = React.useState<Result[]>([]);

  async function useGiphyService() {
    const response: Root = await fetchData();
    const { results } = response;

    if (Array.isArray(results) && results.length > 0) {
      setTrendingImages(results);
    } else {
      setTrendingImages([]);
    }
  }

  useGiphyService();

  return (
    <Columned>
      {trendingImages &&
        trendingImages.map(element => <Gif src={element.thumbnail} alt={element.title}></Gif>)}
    </Columned>
  );
};

export default TrendingSearch;
