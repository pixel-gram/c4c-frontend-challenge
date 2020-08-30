import React from 'react';
import './App.css';
import TopNavigation from './features/navigation/Top';
import MainRoutes from './features/navigation/routes/Main';

import RootWrappers from './features/setup/RootWrappers';


function App() {
  return (
    <div className="App">
      <RootWrappers>
        <TopNavigation />
        <MainRoutes />
      </RootWrappers>
    </div>
  );
}

export default App;
