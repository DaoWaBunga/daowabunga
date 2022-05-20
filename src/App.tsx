import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './scss/light.scss';
import './scss/dark.scss';
import TopNavigation from './layouts/TopNavigation';
import HomePage from './pages/HomePage';
import BottomFooter from './layouts/BottomFooter';
import TKG from './pages/TKG';
import WhiteList from './pages/Whitelist/whitelistmainpage';
import DikHeads from './pages/DikHeads';

function App() {
  return (
    <>
      <Router>
        <TopNavigation />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tkg" element={<TKG />} />
          <Route path="/whitelist" element={<WhiteList />} />
          <Route path="/dikheads" element={<DikHeads />} />
        </Routes>

        <BottomFooter />
      </Router>
    </>
  );
}

export default App;
