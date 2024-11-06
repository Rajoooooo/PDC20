import './App.css';
import Register from './Mod01Registration';
import Registration from './Registration';
import LoginForm from './dashboard/LoginForm'; 
import AuthError from './dashboard/AuthError'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactUs from './components/ContactUs';
import MyHome from './components/MyHome';
import MyProfile from './components/MyProfile';
import Nav from './components/Nav';
import MyMainForm from './MyMainForms/MyMainForm';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginForm />} />
    //     <Route path="/auth-error" element={<AuthError />} />
    //   </Routes>
    // </Router>

    <Router>
      <Nav/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<MyHome/>}/>
          <Route path="/profile" element={<MyProfile/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/mymainforms/*" element={<MyMainForm/>}/>
          <Route path="*" element={<h2>404 not found</h2>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
