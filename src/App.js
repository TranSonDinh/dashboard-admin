import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Topbar from './components/Topbar';

function App() {
  return (
    <Router>
      <>
        <Topbar />
      </>
      <Switch>
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
