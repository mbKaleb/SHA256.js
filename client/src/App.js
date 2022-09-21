//React Imports
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Message from './components/pages/Message';
import Hashing from './components/pages/Hashing';

const path1 = '';
const path2 = 'hashing';

export default function App() {
    const [initMsg, setInitMsg] = useState([]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route
                        path={`/${path1}`}
                        element={<Message setInitMsg={setInitMsg} />}
                    />
                </Route>
            </Routes>
        </Router>
    );
}
