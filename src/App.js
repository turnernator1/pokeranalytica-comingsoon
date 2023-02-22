
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';


function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/privacy-policy" element={<SigninPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
