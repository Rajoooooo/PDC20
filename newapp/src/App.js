import './App.css';
import Register from './Mod01Registration';
import Registration from './Registration';
import LoginForm from './dashboard/LoginForm'; 
import AuthError from './dashboard/AuthError'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/auth-error" element={<AuthError />} />
      </Routes>
    </Router>
  );
}

export default App;
