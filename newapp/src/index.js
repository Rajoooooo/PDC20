import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registration from './Registration';
import Register from './Mod01Registration';
import Expressionjsx from './Expressionjsx'
import GreetHello from './Greetings/GreetHello';
import Homepage from './Conditionals/Homepage';
import LoginForm from './dashboard/LoginForm';
import UserProfile from './Conditionals/profile/UserProfile';
import MainEvent from './Events/MainEvent';
import Itemlist from './Events/Itemlist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
{/* <UserProfile/> */}

{/* <Itemlist/> */}

{/* <MainEvent/> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
