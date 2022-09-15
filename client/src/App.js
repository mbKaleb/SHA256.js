
//React Imports
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import FirstPage from './components/pages/FirstPage';
const test = 'test'

export default function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Main />}>
                  <Route path={`/${test}`} element={<FirstPage />}/>
              </Route>
          </Routes>
      </Router>
  );
}