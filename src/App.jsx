import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Films from './components/Films';
import People from './components/People';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/films" element={<Films />}/>
              <Route path="/people" element={<People />}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
