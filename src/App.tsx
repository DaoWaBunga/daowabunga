import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './scss/light.scss';
import './scss/dark.scss';
import TopNavigation from './layouts/TopNavigation';
import HomePage from './pages/HomePage';
import BottomFooter from './layouts/BottomFooter';
import TKG from './pages/TKG';

function App() {
  return (
    <>
      <Router>
        <TopNavigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tkg" element={<TKG />} />
        </Routes>

        <BottomFooter />
      </Router>
    </>
  );
}

export default App;
