import React from 'react';
import './App.css';
import { GiphySearch } from './components/RecipeList';

const App: React.FC = () => {
  return (
    <div className="App">
      <GiphySearch />
    </div>
  );
};

export default App;
