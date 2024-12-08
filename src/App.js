import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';


function App() {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </Router>
  );
}

export default App;
