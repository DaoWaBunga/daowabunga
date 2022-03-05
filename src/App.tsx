import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './scss/light.scss';
import './scss/dark.scss';
import TopNavigation from './layouts/TopNavigation';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Router>
        <TopNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
