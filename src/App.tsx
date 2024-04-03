import React from 'react';
import { Outlet, HashRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';

import './globals.css';
import './styles.css';

export default function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Outlet />
      </Router>
    </div>
  );
}
