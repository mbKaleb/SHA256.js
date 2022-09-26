//React Imports
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './components/Main';
import Message from './components/pages/Message';
import Hashing from './components/pages/Hashing';


const path1 = '';

export default function App() {
    const [initMsg, setInitMsg] = useState([]);
    const [clippyStr, setClippyStr] = useState("")
    const { context } = React.createContext(clippyStr);//Text data for clippy
    

    return (
        <context.Provider value={clippyStr}>
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
        </context.Provider>
    );
}
