//Main is the wrapper page for all pages
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../logo.svg';

export default function Main() {

    const [userInput, setUserInput] = useState('');
    const [isOutletActive, setIsOutletActive] = useState(false)

    const inputHandler = (e) => {
        if (!isOutletActive) setUserInput((userInput) => e.target.value)
    };

    const buttonClickHandler = (e) => {
        setIsOutletActive(!isOutletActive);
    }


    return (
        <div className="App p-2">
            <header className="App-header">
                <div className="ml-1">
                    Welcome to SHA-256.js, enter your string and press start
                </div>
                <input
                    className="outline outline-1 rounded p-1 m-1"
                    value={userInput}
                    onChange={inputHandler}
                />
                <button
                    className="outline outline-1 rounded p-1 m-1"
                    onClick={buttonClickHandler}
                >
                    {isOutletActive ? 'Cancel' : 'Start'}
                </button>
                <div className="p-1 m-1 outline outline-1 rounded h-screen">
                    {isOutletActive ? (
                        <Outlet context={[userInput, setUserInput]} />
                    ) : null}
                </div>
            </header>
        </div>
    );
}
