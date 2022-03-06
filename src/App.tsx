import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import './scss/light.scss';
import './scss/dark.scss';
import TopNavigation from './layouts/TopNavigation';
import BodyPadding from './layouts/BodyPadding';
import HomePage from './pages/HomePage';
import BottomFooter from './layouts/BottomFooter';

function App() {
  return (
    <>
      <Router>
        <TopNavigation />
        <div className="websiteBody">
          <BodyPadding />
          <div className="sleekDesktopBody">
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <BodyPadding />
        </div>

        <BottomFooter />
      </Router>
    </>
  );
}

export default App;
