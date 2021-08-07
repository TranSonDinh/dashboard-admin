import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  const [showUserName, setShowUserName] = useState(false);
  const handlesShowUser = () => {
    setShowUserName(!showUserName);
  }
  return (
    <Router>
      <>
        <Topbar showUserName={showUserName} setShowUserName={handlesShowUser} />
        <Switch>
          <Route path="/" exact><Dashboard showUserName={showUserName} /></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
