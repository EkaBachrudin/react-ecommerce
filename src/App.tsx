import React from 'react';
import '../src/App.scss'; 
import AppRouter from '../src/components/layouts/Router';

const App: React.FC = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
