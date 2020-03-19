import React from 'react';
import './App.css';
import { RecipeList } from './components/RecipeList';

const App: React.FC = () => {
  return (
    <div className="App">
      <RecipeList />
    </div>
  );
};

export default App;
