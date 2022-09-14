//Main is the wrapper page for all pages
import logo from 'client/src/logo.svg';


export function Main() {
  return (
      <div className="App">
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                  Edit <code>src/App.js</code> and save to reload.
              </p>
          </header>
      </div>
  );
}