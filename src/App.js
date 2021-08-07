import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <>
        <Topbar />
        <Switch>
          <Route path="/" exact><Dashboard /></Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
