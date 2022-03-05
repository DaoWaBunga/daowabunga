import React from 'react';
import './scss/light.scss';
import './scss/dark.scss';
import TopNavigation from './layouts/TopNavigation';

function App() {
  return (
    <>
      <TopNavigation />
      <div className="box"></div>
    </>
  );
}

export default App;
