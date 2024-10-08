// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

// https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom

// https://blog.logrocket.com/how-to-use-axios-post-requests/


import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import useToken from './hooks/useToken';

function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
