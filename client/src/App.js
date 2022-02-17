import logo from './logo.svg';
import './dist/App.css';

import React from "react";

import {slide as Menu } from "react-burger-menu";
import Sidebar from './Components/Sidebar';

import Chat from './pages/Chat';
import {BrowserRouter} from 'react-router-dom'
import telegram from './assets/images/telegram.svg';

function App() {
    return (
        <div>
        <Sidebar/>
        </div>
    );
}

export default App;
