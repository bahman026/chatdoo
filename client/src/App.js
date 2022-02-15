import logo from './logo.svg';
import './dist/App.css';

import React from "react";

import Chat from './pages/Chat';
import {BrowserRouter} from 'react-router-dom'
import telegram from './assets/images/telegram.svg';

function App() {
    return (
      <div>
<Chat/>
      </div>
    );
}

export default App;
