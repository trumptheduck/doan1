import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/index';
import { publicRoutes } from './routes/index';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppProvider } from './components/context/app/provider';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className='App'>
          {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Page />} />;
            })}
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
