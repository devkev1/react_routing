import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
              <Route path="/home" component={Home}/>
              <Route path="/films" component={Films}/>
              <Route path="/people" component={People}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
