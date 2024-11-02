import React from 'react';
import '../src/App.scss'; 
import AppRouter from '../src/components/layouts/Router';
import Header from '../src/components/layouts/Header';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
