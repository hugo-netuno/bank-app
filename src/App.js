// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Dashboard from './components/Dashboard';

function App() {
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
