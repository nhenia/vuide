
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Home } from './views/Home';
import { Explore } from './views/Explore';
import { Randomizer } from './views/Randomizer';
import { CrystalBall } from './views/CrystalBall';
import { SettingsAltar } from './views/SettingsAltar';

/**
 * Main application component.
 * Sets up the ErrorBoundary, Router, and global layout with defined routes.
 *
 * @returns {React.ReactElement} The rendered application.
 */
const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/category/:arcana" element={<Explore />} />
          <Route path="/random" element={<Randomizer />} />
          <Route path="/crystal-ball" element={<CrystalBall />} />
          <Route path="/settings" element={<SettingsAltar />} />
          </Routes>
        </Layout>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
