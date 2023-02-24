//Main is the wrapper page for all pages
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

export default function Main() {
    const [userInput, setUserInput] = useState('');
    const [isOutletActive, setIsOutletActive] = useState(false);

    const inputHandler = (e) => {
        if (!isOutletActive) setUserInput(e.target.value);
    };

    const buttonClickHandler = (e) => {
        setIsOutletActive(!isOutletActive);
    };

    return (
        <div className="App p-4 bg-yellow-50 h-screen">
                <div className="ml-1 mb-2 font-medium">
                    Welcome to SHA-256.js, enter your string and press start
                </div>
                
                <input
                    className="outline outline-1 p-1 m-1 -p-1 -mb-2"
                    value={userInput}
                    onChange={inputHandler}
                />
                <button
                    className="outline outline-1 rounded p-1 m-1 bg-white"
                    onClick={buttonClickHandler}
                >
                    {isOutletActive ? 'Cancel' : 'Start'}
                </button>

                <div className="p-2 outline-1 outline m-1 bg-black h-[90vh] ">
                    {isOutletActive ? (
                        <Outlet context={[userInput, setUserInput]} />
                    ) : null}
                </div>
        </div>
    );
}