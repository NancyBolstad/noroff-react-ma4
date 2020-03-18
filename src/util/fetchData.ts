import { Root } from '../types/data';
import { API_URL } from './constants';

async function fetchData() {
  try {
    const response = await fetch(API_URL);
    const data: Root = await response.json();

    return data;
  } catch (err) {
    throw err;
  }
}

export default fetchData;
