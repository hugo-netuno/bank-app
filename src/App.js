// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Dashboard from './components/Dashboard';
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
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
