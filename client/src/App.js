//React Imports
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import FirstPage from './components/pages/FirstPage';
import Hashing from './components/pages/Hashing';

const path1 = 'test';
const path2 = 'hashing';

export default function App() {
    const [initMsg, setInitMsg] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route
                        path={`/${path1}`}
                        element={<FirstPage setInitMsg={setInitMsg} />}
                    />
                    {/* <Route
                        path={`/${path2}`}
                        element={<Hashing initMsg={initMsg} />}
                    /> */}
                </Route>
            </Routes>
        </Router>
    );
}
